// 3rd Party Imports
const router = require("express").Router();

// Controller Imports
const {
  addBlog,
  addProduct,
  getAllBlogs,
  getMyBlogs,
  likePost,
  getLikedBlogs,
  getThisBlog,
} = require("../controllers/blog");

// Middleware Imports
const protectRoute = require("../middlewares/routeProtect");

router.post("/like/:blogId", protectRoute, likePost);
router.post("/", protectRoute, addBlog);
router.get("/", getAllBlogs);
router.get("/me", protectRoute, getMyBlogs);
router.get("/liked-posts", protectRoute, getLikedBlogs);
router.get("/:blogId", protectRoute, getThisBlog);

module.exports = router;
