import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    // Read JWT from the 'jwt' cookie
    const token = req.cookies.jwt;
    if (!token) {
      res.status(401).json({ message: "Not authorized, token not." });
      throw new Error("Not authorized,no JWT token.");
    }
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      res.status(401).json({ message: "Not authorized, token failed." });
      throw new Error("Not authorized,Invalid JWT token.");
    }
    // Get user from the token
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) throw new Error("No user found, try again.");
    req.user = user;

    next();
  } catch (error) {
    console.log("error in protectRoute middleware:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
