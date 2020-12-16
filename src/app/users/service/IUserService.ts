import { User } from '../User';

export interface IUserService {
    list(): User[];
}