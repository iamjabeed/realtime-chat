import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

export const getUsersForSidebar = asyncHandler(async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // All the users expect current loggedIn user($ne)
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } });
    res.status(201).json(allUsers);
  } catch (error) {
    console.log("Error in getting(getUsersForSidebar) users:", error.message);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
});
