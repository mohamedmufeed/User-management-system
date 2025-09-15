import { Request, Response } from "express";

export default interface IDashboardController{
        getAllUsers(req:Request,res:Response):Promise<void>
        fetchUser(req:Request,res:Response):Promise<void>
        editUser(req:Request,res:Response):Promise<void>
        
        
}