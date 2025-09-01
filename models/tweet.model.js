import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: { 
      type: String, 
      required: true },
      user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",     // 👈 User model ko refer karna
    required: true
  }
  },
  {
     timestamps: true
     }
);

export default mongoose.model("Tweet", tweetSchema);

