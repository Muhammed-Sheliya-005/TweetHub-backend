// const jwt = require("jsonwebtoken");

// function auth(req, res, next) {
//   const token = req.headers["authorization"]?.split(" ")[1];
//   if (!token) return res.status(401).json({ msg: "No token" });

//   try {
//     const decoded = jwt.verify(token, "secret123");
//     req.user = decoded.id; // user id
//     next();
//   } catch (err) {
//     return res.status(401).json({ msg: "Invalid token" });
//   }
// }

// module.exports = auth;

// import jwt from "jsonwebtoken";

// function auth(req, res, next) {
//   const token = req.headers["authorization"]?.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ msg: "No token" });
//   }

//   try {
//     const decoded = jwt.verify(token, "secret123");
//     req.user = decoded.id; // user id
//     next();
//   } catch (err) {
//     return res.status(401).json({ msg: "Invalid token" });
//   }
// }

// export default auth;

// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// function auth(req, res, next) {
//   const token = req.headers["authorization"]?.split(" ")[1];
//   if (!token) return res.status(200).json({ msg: "md sheliya" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.id;
//     next();
//   } catch (err) {
//     return res.status(401).json({ msg: "Invalid token" });
//   }
// }

// export default auth;

// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// const auth = (req, res, next) => {
//   const token = req.headers["authorization"]?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ msg: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.id; // user id ko request object me daal do
//     next();
//   } catch (err) {
//     return res.status(401).json({ msg: "Invalid token" });
//   }
// };

// export default auth;

// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//   const token = req.header("Authorization")?.split(" ")[1];
// console.log("👉 Token from header:", token);

//   if (!token) {
//     return res.status(401).json({ msg: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user; // 👈 payload me jo user store kiya tha
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: "Token is not valid" });
//   }
// };

// export default auth;

// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//   const authHeader = req.header("Authorization");

//   if (!authHeader) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   // "Bearer token" → ["Bearer", "token"]
//   const token = authHeader.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   // try {
//   //   const decoded = jwt.verify(token, process.env.JWT_SECRET);

//   //   console.log("JWT_SECRET at verify:", process.env.JWT_SECRET);
//   //   req.user = decoded.id;
//   //   next();
//   // } catch (err) {
//   //   console.error("JWT verification failed:", err.message);
//   //   res.status(401).json({ msg: "Token is not valid" });
//   // }
//   try {
//   console.log("TOKEN RECEIVED:", token);
//   console.log("SECRET USED:", process.env.JWT_SECRET);

//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   console.log("DECODED:", decoded);

//   req.user = decoded.id;
//   next();
// } catch (err) {
//   console.error("JWT verification failed:", err.message);
//   return res.status(401).json({ message: "Token is not valid" });
// }
// };

// export default auth;

import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded Token:", decoded);

    // ⚡️ Payload ke structure ke hisaab se yaha choose karo:
    req.user = decoded.id || decoded.user.id;

    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default auth;
