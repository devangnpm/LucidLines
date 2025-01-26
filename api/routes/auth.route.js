const express = require('express');
const asyncHandler = require('express-async-handler');
const {handleSignUp, handleSignIn} = require('../controllers/auth.controller');
const passport = require("../utils/passport.cfg")


const router = express.Router();


router.post("/login", asyncHandler(handleSignIn));

router.get(
    "/test",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      // `req.user` contains the user details extracted from the token
      res.json({
        message: "JWT authentication successful!",
        user: req.user,
      });
    }
  );
  


router.post("/signup", asyncHandler(handleSignUp));

router.get("/signup", (req,res) => {res.send("hello world")});




module.exports = router