import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

// @desc    Register new user
// @route   POST /api/auth/signup
export const signup = asyncHandler(async (req, res) => {
  const { fullName, username, password, confirmPassword, gender } = req.body;

  if (!username || !password || !gender) {
    res.status(400);
    throw new Error("Invalid user, Please fill all the required fields");
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords don't match" });
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
    fullName,
    username,
    password: hashedPass,
    gender,
    profilePic: gender === "male" ? malePfp : femalePfp,
  });

  try {
    generateToken(newUser?._id, res);
    // console.log("new user id", newUser._id);
    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
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
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// @desc   Logout user
// @route   POST /api/auth/logout
export const logout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});
