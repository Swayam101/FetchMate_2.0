// Model Imports
const Blog = require("../models/Blog");

// Utility Imports
const asyncWrapper = require("../utils/asyncWrapper");
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
  res.json({status:true,blog});
});

exports.getAllBlogs = asyncWrapper(async (req, res, next) => {
  const blogs = await Blog.find().populate('author');
  const shuffled = shuffle(blogs);
  res.json({status:true,blogs:shuffled});
});

exports.getMyBlogs = asyncWrapper(async (req, res, next) => {
  const user = req.user._id;
  const myBlogs = await Blog.find({ author: user });
  res.json(myBlogs);
});

exports.getLikedBlogs = asyncWrapper(async (req, res, next) => {
  const user = req.user._id;
  const likedPosts = await Blog.find({ likedBy: user }).populate("author");
  res.json(likedPosts);
});

exports.likePost = asyncWrapper(async (req, res, next) => {
  const postId = req.params.blogId;
  const user = req.user._id;
  const myBlog = await Blog.findById(postId);
  if (myBlog.likedBy.includes(user))
    return res.json({ message: "Post Liked Successfully!", post: myBlog });
  myBlog.likedBy.push(user);
  const { _id, ...update } = myBlog;
  const updatedPost = await Blog.findByIdAndUpdate(postId, update, {
    new: true,
  });
  res.json({
    status: true,
    post: updatedPost,
    message: "Post Liked Successfully!",
  });
});

exports.getThisBlog = asyncWrapper(async (req, res, next) => {
  const blogId = req.params.blogId;
  const blog = await Blog.find({ _id: blogId });
  res.json(blog);
});



// exports.addProduct = asyncWrapper(async (req, res, next) => {
//   const { name, price, stock, category } = req.body;
//   const image = req.file.path;

//   const newProduct = await Product.create({
//     name,
//     price,
//     stock,
//     imageLink: image,
//     category,
//   });

//   res.json(newProduct);
// });
