const express = require('express');
const {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} =  require("../controller/roomController.js");
const { verifyAdmin,verifyToken } =  require("../utils/verifyToken.js");

const router = express.Router();
//CREATE
router.post("/room/:hotelid", verifyToken, verifyAdmin, createRoom);

//UPDATE
router.put("/room/availability/:id", updateRoomAvailability);
router.put("/room/:id",verifyToken, verifyAdmin, updateRoom);
//DELETE
router.delete("/room/:id/:hotelid", verifyToken,verifyAdmin, deleteRoom);
//GET

router.get("/room/:id", getRoom);
//GET ALL

router.get("/allrooms", getRooms);

module.exports = router; 
