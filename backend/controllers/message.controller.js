import asyncHandler from "express-async-handler";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

// @desc    Send messages
// @route   POST api/messages/send/:id
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    // check for conversation btw two user
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    // If conversation doesn't exists create a new conversation
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    //TODO: Check if a similar message already exists (optional)

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save();
    // await newMessage.save();
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sending message:", error.message);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

// @desc    GEt messages
// @route   POST api/messages/:id
export const getMessage = asyncHandler(async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    // Find conversation btw the participants(sender and userToChat)

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getting(getMessage) message:", error.message);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
});
