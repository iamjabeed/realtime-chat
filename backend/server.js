import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Utils
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI);

const app = express();
app.use(express.json());
app.use(cookieParser());

// Correct the path for authRoutes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
