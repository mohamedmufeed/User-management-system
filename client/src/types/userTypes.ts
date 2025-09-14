export interface IUser{
    _id?:string | undefined;
    firstName:string;
    lastName:string;
    password:string;
    phone:string;
    isAdmin:boolean;
    isBlocked:boolean
}