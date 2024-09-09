// Model Imports
const Blog = require("../models/Blog");

// Utility Imports
const asyncWrapper = require("../utils/asyncWrapper");
const CustomResponse = require("../utils/Response");
const shuffle = require("../utils/shuffleArray");

//      Controller Functions
exports.addBlog = asyncWrapper(async (req, res, next) => {
  const { content, title } = req.body;
  const user = req.user._id;
  const blog = await Blog.create({
    content,
    title,
    author: user,
  });
  const response = new CustomResponse(
    true,
    { blog },
    null,
    "blog published sucessfully!"
  );
  res.status(200).json(response);
});

exports.getAllBlogs = asyncWrapper(async (req, res, next) => {
  const blogs = await Blog.find().populate("author");
  const shuffled = shuffle(blogs);
  const response = new CustomResponse(
    true,
    { blogs: shuffled },
    null,
    "blogs fetched successfully!"
  );
  res.status(200).json(response);
});

exports.getMyBlogs = asyncWrapper(async (req, res, next) => {
  const user = req.user._id;
  const myBlogs = await Blog.find({ author: user });
  const response = new CustomResponse(
    true,
    { myBlogs },
    null,
    "author blogs fetched successfully"
  );
  res.status(200).json(response);
});

exports.getLikedBlogs = asyncWrapper(async (req, res, next) => {
  const user = req.user._id;
  const likedPosts = await Blog.find({ likedBy: user }).populate("author");
  const response = new CustomResponse(
    true,
    { likedPosts },
    null,
    "liked blogs fetched successfully"
  );
  res.status(200).json(response);
});

exports.likePost = asyncWrapper(async (req, res, next) => {
  const postId = req.params.blogId;
  const user = req.user._id;
  let updatedBlog = await Blog.findById(postId);
  const response = new CustomResponse(
    true,
    { updatedBlog },
    null,
    "blog liked fetched successfully"
  );
  if (updatedBlog.likedBy.includes(user)) return res.status(200).json(response);
  updatedBlog.likedBy.push(user);
  const { _id, ...update } = updatedBlog;
  updatedBlog = await Blog.findByIdAndUpdate(postId, update, {
    new: true,
  });
  response.data = { updatedBlog };
  res.status(200).json(response);
});

exports.getThisBlog = asyncWrapper(async (req, res, next) => {
  const blogId = req.params.blogId;
  const blog = await Blog.find({ _id: blogId });
  const response = new CustomResponse(
    true,
    { blog },
    null,
    "blog fetched fetched successfully"
  );
  res.status(200).json(response);
});
