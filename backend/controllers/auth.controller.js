import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

// @desc    Register new user
// @route   POST /api/auth/signup
export const signup = asyncHandler(async (req, res) => {
  const { fullname, username, password, confirmPassword, gender } = req.body;

  if (!username || !password || !gender) {
    res.status(400);
    throw new Error("Invalid user, Please fill all the required fields");
  }

  // Check if the user already exists
  const userExists = await User.findOne({ username });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const malePfp = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const femalePfp = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  // Create new user
  const newUser = new User({
    fullname,
    username,
    password: hashedPass,
    gender,
    profilePic: gender === "male" ? malePfp : femalePfp,
  });

  try {
    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      gender: newUser.gender,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error while creating user",
      error: error.message,
    });
    console.log(error.message);
  }
});

// @desc    Login user
// @route   POST /api/auth/login
export const login = asyncHandler(async (req, res) => {
  res.send("Login route");
});

// @desc   Logoutuser
// @route   POST /api/auth/logout
export const logout = asyncHandler(async (req, res) => {
  res.send("Logout route");
});
