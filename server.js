import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./feedbackRoutes.js";
import authRoutes from "./authRoutes.js";

dotenv.config({ path: "../.env" }); 
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/feedbackDB";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});