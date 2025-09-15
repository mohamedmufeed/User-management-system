import express from "express"
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes"
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
app.use("/api/admin", adminRoutes);
app.use("/api/user",userRoutes)
const PORT = process.env.PORTNUMBER || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})




