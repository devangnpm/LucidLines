const express = require("express");
const asyncHandler = require("express-async-handler");
const passport = require("../utils/passport.cfg");
const {
  getAllPosts,
  getPostById,
  updatePostById,
  getPostImageURL,
  createNewBlogPost,
} = require("../controllers/posts.controller");

const multer = require("multer"); // importing multer for handling file uploads
const storage = require("../utils/cloudinary.cfg"); // configuring cloudinary storage
const upload = multer({ storage }); //setting up multer with Cloudinary storage

const router = express.Router();

//get all posts
router.get(
  "/getposts",
  // passport.authenticate("jwt", { session: false }),
  asyncHandler( async (req,res) => {
    const allPosts = await getAllPosts();
    console.log("Fetched posts:", allPosts); 
    res.status(200).json(allPosts);
  }),

);

//create a new post
router.post(
  "/create",
  // passport.authenticate("jwt" , {session:false}),
  upload.none(),
  async (req, res) => {

    const { title, editor, url, userId } = req.body;

    console.log("Title:", title);
    console.log("Editor Content:", editor);
    console.log("Image URL:", url);
    console.log("User ID:", userId);

    await createNewBlogPost(title,editor,url,userId)
    
    res.status(200).send("Post created successfully");
  },
);

//update a post
router.put(
  "/update",
  // passport.authenticate("jwt", { session: false }),
  asyncHandler(updatePostById)
);

// New post image upload route
router.post(
  "/upload",
  // passport.authenticate("jwt" , {session:false}),
  upload.single("file"), // uploading to my Cloudinary account and getting back URL
  asyncHandler(getPostImageURL)
);


// Get a single blog post details (postId)
router.get(
  "/:postId",
  // passport.authenticate("jwt" , {session:false}),
  asyncHandler(async (req, res) => {
    const postId = req.params.postId; // Ensure it's a number
    console.log(`postId log: ${postId}`);

    if (isNaN(postId)) {
      return res.status(400).json({ error: "Invalid postId" });
    }

    try {
      const post = await getPostById(postId);
      console.log(`Logging the post detail:`, post);

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.status(200).json(post);
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  })
);


module.exports = router;
