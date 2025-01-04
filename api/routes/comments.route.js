const express = require("express");
const asyncHandler = require("express-async-handler");
const passport = require("../utils/passport.cfg");
const {
  getComments,
  createComment,
  deleteComment,
} = require("../controllers/posts.controller");

const router = express.Router();

router.get("/getcomments", 
    passport.authenticate("jwt" , {session:false}),
    asyncHandler(getComments),
);

router.post("/create", 
    passport.authenticate("jwt" , {session:false}),
    asyncHandler(createComment),
);


router.get("/getcomments/:postId", 
    passport.authenticate("jwt" , {session:false}),
    asyncHandler(getComments),
);