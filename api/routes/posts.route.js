const express = require('express');
const asyncHandler = require('express-async-handler');
const passport = require("../utils/passport.cfg")
const {getAllPosts, getPostById, updatePostById, savePostImageURL} = require("../controllers/posts.controller")

const multer = require('multer'); // importing multer for handling file uploads
const storage = require('../utils/cloudinary.cfg'); // configuring cloudinary storage
const upload = multer({storage}) //setting up multer with Cloudinary storage


const router = express.Router();

//get all posts 
router.get("/getposts", 
    passport.authenticate("jwt" , {session:false}),
    asyncHandler(getAllPosts),
);

//create a new post
router.post("/create",
    passport.authenticate("jwt" , {session:false}),
    asyncHandler(getPostById)
)

//update a post
router.put("/update",
    passport.authenticate("jwt", {session:false}),
    asyncHandler(updatePostById)
)

// New post image upload route
router.post("/upload",
    // passport.authenticate("jwt" , {session:false}),
    upload.single('file'),  // uploading to my Cloudinary account and getting back URL
    asyncHandler(savePostImageURL)
)




module.exports = router
