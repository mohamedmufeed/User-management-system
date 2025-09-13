import express from "express"
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from "cookie-parser";
import { connectDb } from "./config/db";
dotenv.config()
connectDb()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    cors({
        origin: process.env.FRONT_END_URL,
        credentials: true,
    })
);

const PORT = process.env.PORTNUMBER || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})




