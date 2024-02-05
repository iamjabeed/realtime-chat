import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Utils
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI);

const app = express();
app.use(express.json());
app.use(cookieParser());

// API- Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
