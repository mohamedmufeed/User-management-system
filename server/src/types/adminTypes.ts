import { IUserDTO } from "./userTypes";

export interface GetPaginationQuery {
    page: number;
    limit: number;
    searchQuery: string;
    status:string |undefined
}

export interface GetPaginationResponse {
    users: IUserDTO[];
    totalUsers: number;
    totalPages: number;
}