import express from "express";
import {
  createHotel,updateHotel,deleteHotel,getHotel,getAllHotel,countByCity,countByType,getHotelRooms
} from "../controller/hotelController.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin,verifyToken} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/hotel/new", verifyToken, verifyAdmin, createHotel);

// //UPDATE
router.put("/hotel/:id",verifyToken, verifyAdmin, updateHotel);
// //DELETE
router.delete("/hotel/:id",verifyToken, verifyAdmin, deleteHotel);
// //GET

router.get("/hotel/:id", getHotel);
// //GET ALL

router.get("/hotels", getAllHotel);
router.get("/hotels/countByCity", countByCity);
router.get("/hotels/countByType", countByType);
router.get("/hotels/room/:id", getHotelRooms);

export default router;