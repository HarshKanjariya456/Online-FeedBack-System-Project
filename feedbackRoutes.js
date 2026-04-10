import express from "express";
import Feedback from "./Feedback.js";
import { verifyToken, isAdmin } from "./authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;