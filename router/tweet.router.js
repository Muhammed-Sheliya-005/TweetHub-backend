// import express from 'express';
// import {createtweet, deleteTweet, getMyTweets, updateTweet} from "../controllers/tweet.controller.js"
// import auth from "../middleware/auth.middleware.js"
// const router= express.Router()

// router.post("/create",auth,createtweet)
// router.get("/",auth,getMyTweets)
// router.delete("/delete/:id",auth,deleteTweet)
// router.put("/update/:id",auth,updateTweet)

// export default router;

import express from "express";
import { createtweet, deleteTweet, getMyTweets, updateTweet, getAllTweets } from "../controllers/tweet.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", auth, createtweet);
router.get("/", auth, getAllTweets);       // 👈 sab ke tweets
router.get("/mine", auth, getMyTweets);    // 👈 apne tweets
router.delete("/delete/:id", auth, deleteTweet);
router.put("/update/:id", auth, updateTweet);

export default router;
