import asyncHandler from "express-async-handler";

export const sendMessage = asyncHandler(async (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
    // const senderId = req.userId;
  } catch (error) {
    console.log("Error in sending message:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});
