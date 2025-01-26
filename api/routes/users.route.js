const express = require("express");
const asyncHandler = require("express-async-handler");
// const passport = require("../utils/passport.cfg")

const {
  getAllUsers,
  updateUserDetails,
  deleteUser,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Test route is working correctly!",
  });
});

// update user details
router.post("/update-user", asyncHandler(updateUserDetails));

// get all users
router.get("/recent-users",
  asyncHandler( async (req,res) => {
    const allUsers = await getAllUsers()
    console.log(allUsers)
    res.status(200).json(allUsers);
  }), 
);

router.delete("/delete", asyncHandler(deleteUser));

module.exports = router;
