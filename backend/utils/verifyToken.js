import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { createError } from "../utils/errorHandler.js";

// function verifyToken(req, res, next) {
//   // Get the token from the headers
//   const token = req.headers['x-access-token'];

//   // Check if the token is present
//   if (!token) {
//     return res.status(401).send({ auth: false, message: 'No token provided.' });
//   }

//   // Verify the token
//   jwt.verify(token, secret, (err, decoded) => {
//     if (err) {
//       return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
//     }

//     // Save the decoded token in the request for later use
//     req.userId = decoded.id;
//     next();
//   });
// }

// function verifyUser(req, res, next) {
//   // Get the user's role from the request
//   const userRole = req.userRole;

//   // Check if the user has the proper permissions
//   if (userRole !== 'admin') {
//     return res.status(403).send({ auth: false, message: 'Not authorized.' });
//   }

//   next();
// }

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  // console.log("cookie", token);
  if (!token) {
    return next(createError(401, "You are not authenticated! 🤨"));
  }

  // const decodedData = jwt.verify(token,process.env.JWT)
  // // console.log({decodedData});
  // req.user = await User.findById(decodedData.id)
  // // console.log(req.user);
  // next();

  jwt.verify(token, process.env.JWT, (err, user) => {
    // console.log({user});
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    // console.log(req.user);
    next();
  });
};

export const verifyUser = (req, res, next) => {
  //  console.log(req.user);
    if (req.user.id === req.params.id || req.user.isAdmin) {
      console.log('user verification working');
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
};

export const verifyAdmin = (req, res, next) => {
  // console.log('aaa',req.user);
    if (req.user.isAdmin) {
      // console.log('admin access');
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }

};
