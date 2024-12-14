const express = require('express');
const asyncHandler = require('express-async-handler');
const passport = require("../utils/passport.cfg")
const {getAllPosts, getPostById, updatePostById} = require("../controllers/posts.controller")


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


module.exports = router
