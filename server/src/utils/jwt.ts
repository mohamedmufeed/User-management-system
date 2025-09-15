import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_JWT_SECRET!;

export const generateToken = (id: string, isAdmin: boolean) => {
  return jwt.sign({ id, isAdmin }, JWT_SECRET, { expiresIn: "15m" }); 
};

export const generateRefreshToken = (id: string, isAdmin: boolean) => {
  return jwt.sign({ id, isAdmin }, REFRESH_SECRET, { expiresIn: "7d" }); 
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, REFRESH_SECRET) as { id: string; isAdmin: boolean };
};
