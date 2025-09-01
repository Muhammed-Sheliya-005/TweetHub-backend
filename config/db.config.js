// import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config()

// const DB_URI = process.env.DB_URI

// const connectDB = async () =>{
   
//     try {
    
//         await mongoose.connect(DB_URI)
        
//         console.log('Mongo DB Connected')

//     } catch (error) {
//         console.log('MongoDB could not be connected', error)
//     }
// }

// export default connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Error:", err.message);
    process.exit(0);
  }
};

export default connectDB;
