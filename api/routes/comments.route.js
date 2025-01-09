const express = require("express");
const asyncHandler = require("express-async-handler");
const passport = require("../utils/passport.cfg");
const {
  getComments,
  createComment,
  deleteComment,
} = require("../controllers/posts.controller");

const router = express.Router();


// get all the comments
router.get("/getcomments", 
    passport.authenticate("jwt" , {session:false}),
    asyncHandler(getComments),
);


// create a new post
router.post("/create", 
    passport.authenticate("jwt" , {session:false}),
    asyncHandler(createComment),
);

// get comments related to a post
router.get("/getcomments/:postId", 
    passport.authenticate("jwt" , {session:false}),
    asyncHandler(getComments),
);

module.exports = router

