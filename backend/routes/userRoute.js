import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers
} from "../controller/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id",verifyToken, verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyToken,verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
router.put("/user/:id", verifyToken ,verifyUser, updateUser);

//DELETE
router.delete("/user/:id", verifyToken ,verifyUser, deleteUser);

//GET
router.get("/user/:id", verifyToken, verifyUser, getUser);

//GET ALL
router.get("/users", verifyToken , verifyAdmin, getUsers);



export default router;