import express from 'express';
import { createHotel } from '../controllers/auth';
import { deleteHotel, getHotel, updateHotel } from '../controllers/hotel';
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router=express.Router();


router.post('/',createHotel)
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotel);


export default router