import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Utils
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("api/auth", authRoutes);

// console.clear();

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
