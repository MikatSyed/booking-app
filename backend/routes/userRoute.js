const express = require("express");;
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers
} =  require("../controller/userController.js");
const { verifyAdmin, verifyToken, verifyUser } =  require("../utils/verifyToken.js");

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



module.exports = router; 