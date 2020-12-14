import { IUser } from '../IUser';

export interface IUserService {
    list(): IUser[];
}