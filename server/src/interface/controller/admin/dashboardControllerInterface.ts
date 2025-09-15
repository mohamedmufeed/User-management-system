import { Request, Response } from "express";

export default interface IDashboardController{
        getAllUsers(req:Request,res:Response):Promise<void>
}