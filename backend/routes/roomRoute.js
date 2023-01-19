import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
//   updateRoomAvailability,
} from "../controller/roomController.js";
import { verifyAdmin,verifyToken } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/room/:hotelid", verifyToken, verifyAdmin, createRoom);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/room/:id",verifyToken, verifyAdmin, updateRoom);
//DELETE
router.delete("/room/:id/:hotelid", verifyToken,verifyAdmin, deleteRoom);
//GET

router.get("/room/:id", getRoom);
//GET ALL

router.get("/allrooms", getRooms);

export default router;
