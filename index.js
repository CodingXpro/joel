import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'

import hotelRoute from './routes/hotels.js'

import usersRoute from './routes/user.js'

import roomsRoute from './routes/rooms.js'
import cookieParser from 'cookie-parser';


const app=express();

app.use(express.json());
app.use(cookieParser());

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongodb")
    } catch (error) {
        throw error
    }
}

app.use('/auth',authRoute);
app.use('/hotels',hotelRoute);
app.use('/rooms',roomsRoute);
app.use('/users',usersRoute);




app.listen(8800,(req,res)=>{
    connect();
    console.log("Connested to backend")
})