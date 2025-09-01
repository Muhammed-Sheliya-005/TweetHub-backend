// import Tweet from "../models/tweet.model.js";

// const createtweet = async (req,res) =>{
//   try {
//     const {content}=req.body
//     if(!content){
//       return res.status(400).json({
//         message:"Content is required"
//       })
//     }

//     const tweet = new Tweet({
//       user_id:req.user,
//       content:content.trim()
//     })
//     await tweet.save()
//     return res.status(200).json({
//       message:"Tweet created Successfully",
//       tweet,
//     })
//   } catch (error) {
//     console.error("Error creating tweet",error.message);
//     return res.status(500).json({
//       message:"Internal server error",
//     })
    
//   }
// }

//  const getMyTweets = async (req, res) => {
//   try {
//     const tweets = await Tweet.find({ user: req.user.id }).sort({
//       createdAt: -1,
//     });
//     res.json(tweets);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching tweets", error });
//   }
// }

//  const deleteTweet = async (req, res) => {
//   try {
//     const tweetId = req.params.id;

//     // 1. Find tweet
//     const tweet = await Tweet.findById(tweetId);

//     if (!tweet) {
//       return res.status(404).json({ success: false, message: "Tweet not found" });
//     }

//   // 3. Delete tweet
//     await tweet.deleteOne();

//     res.status(200).json({
//       success: true,
//       message: "Tweet deleted successfully",
//     });
//   } catch (error) {
//     console.error("Error deleting tweet:", error.message);
//     res.status(500).json({ success: false, message: "Server error while deleting tweet" });
//   }
// };

//  const updateTweet = async (req, res) => {
//   try {
//     const tweetId = req.params.id;
//     const { content } = req.body;

//     // 1. Validate input
//     if (!content || content.trim() === "") {
//       return res.status(400).json({ success: false, message: "Tweet content is required" });
//     }

//     // 2. Find tweet
//     const tweet = await Tweet.findById(tweetId);

//     if (!tweet) {
//       return res.status(404).json({ success: false, message: "Tweet not found" });
//     }

//     // 4. Update and save
//     tweet.content = content.trim();
//     await tweet.save();

//     res.status(200).json({
//       success: true,
//       message: "Tweet updated successfully",
//       tweet,
//     });
//   } catch (error) {
//     console.error("Error updating tweet:", error.message);
//     res.status(500).json({ success: false, message: "Server error while updating tweet" });
//   }
// };

// export {createtweet,getMyTweets,deleteTweet,updateTweet
// }

import Tweet from "../models/tweet.model.js";

const createtweet = async (req,res) =>{
  try {
    const {content}=req.body
    if(!content){
      return res.status(400).json({
        message:"Content is required"
      })
    }

    const tweet = new Tweet({
      user:req.user,
      content:content.trim()
    })
    await tweet.save()
    return res.status(200).json({
      message:"Tweet created Successfully",
      tweet,
    })
  } catch (error) {
    console.error("Error creating tweet",error.message);
    return res.status(500).json({
      message:"Internal server error",
    })
    
  }
}

const getMyTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tweets", error });
  }
}

const deleteTweet = async (req, res) => {
  try {
    const tweetId = req.params.id;

    // 1. Find tweet
    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
      return res.status(404).json({ success: false, message: "Tweet not found" });
    }

    // 3. Delete tweet
    await tweet.deleteOne();

    res.status(200).json({
      success: true,
      message: "Tweet deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting tweet:", error.message);
    res.status(500).json({ success: false, message: "Server error while deleting tweet" });
  }
};

const updateTweet = async (req, res) => {
  try {
    const tweetId = req.params.id;
    const { content } = req.body;

    // 1. Validate input
    if (!content || content.trim() === "") {
      return res.status(400).json({ success: false, message: "Tweet content is required" });
    }

    // 2. Find tweet
    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
      return res.status(404).json({ success: false, message: "Tweet not found" });
    }

    // 4. Update and save
    tweet.content = content.trim();
    await tweet.save();

    res.status(200).json({
      success: true,
      message: "Tweet updated successfully",
      tweet,
    });
  } catch (error) {
    console.error("Error updating tweet:", error.message);
    res.status(500).json({ success: false, message: "Server error while updating tweet" });
  }
};

// ✅ New function: Get all tweets with username
const getAllTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find()
      .populate("user", "username")   // sirf username laayega
      .sort({ createdAt: -1 });

    res.json(tweets);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export { createtweet, getMyTweets, deleteTweet, updateTweet, getAllTweets }
