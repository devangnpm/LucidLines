const express = require('express');
const asyncHandler = require('express-async-handler');
const passport = require("../utils/passport.cfg")


const router = express.Router();

router.post("/posts", 
    passport.authenticate("jwt" , {session:false}),
    asyncHandler(getAllPosts)
);




module.exports = router
