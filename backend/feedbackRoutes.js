import express from "express";
import Feedback from "./Feedback.js";
import { verifyToken, isAdmin } from "./authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, async (req, res) => {
  try {
    const { name, email, rating, feedback } = req.body;

    if (!name || !email || !rating || !feedback) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newFeedback = new Feedback({
      name,
      email,
      rating: Number(rating),
      feedback,
      userId: req.user.id
    });
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