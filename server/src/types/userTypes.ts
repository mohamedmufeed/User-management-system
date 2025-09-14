export interface IUser{
    _id?:string | undefined;
    firstName:string;
    lastName:string;
    password:string;
    phone:string;
    isAdmin:boolean;
    isBlocked:boolean
}


export interface IUserDTO {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  isAdmin: boolean;
  isBlocked: boolean;
}