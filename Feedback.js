import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  rating: Number,
  feedback: String,
});

export default mongoose.model("Feedback", feedbackSchema);
