import { Request, Response } from "express";

export default interface IProfileController{
    getProfile(req:Request,res:Response):Promise<void>
    changePassword(req:Request,res:Response):Promise<void>

}