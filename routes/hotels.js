import express from 'express';
import { deleteHotel, getHotel, updateHotel,createHotel, getSingleHotel, getHotelWithName } from '../controllers/hotel.js';
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";



const router=express.Router();

router.post('/',createHotel)
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET ONE WITH ID
router.get("/find", getSingleHotel);

//GET ONE WITH Name
router.get("/findbyname", getHotelWithName);


//GET ALL
router.get("/", getHotel);


export default router