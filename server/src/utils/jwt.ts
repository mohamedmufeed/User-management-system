import jwt from "jsonwebtoken"
const generateToken = (id: string, isAdmin: boolean) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET!, { expiresIn: "15m" });
};

const generateRefreshToken = (id: string, isAdmin: boolean) => {
  return jwt.sign({ id, isAdmin }, process.env.REFRESH_JWT_SECRET!, { expiresIn: "7d" });
};


export { generateToken, generateRefreshToken }