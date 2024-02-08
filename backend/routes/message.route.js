import express from "express";
const router = express.Router();

import { sendMessage, getMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);
export default router;
