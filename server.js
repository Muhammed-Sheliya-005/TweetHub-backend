import express from "express";
import cors from "cors";

import authRoutes from "./router/auth.router.js";   // Auth routes
import tweetRoutes from "./router/tweet.router.js"; // Tweet routes
import connectDB from "./config/db.config.js";      // DB connection
import contactRoutes from "./router/contact.router.js";

const app = express();

// Middlewarecls

app.use(express.json());
app.use(cors());



// Connect Database
connectDB();

// Default Route (Root)
app.get("/", (req, res) => {
  res.send("🚀 Backend is running...");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);
app.use("/api", contactRoutes);

// Error handling (optional)
app.use((req, res) => {
  res.status(404).json({ msg: "Route not found" });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
