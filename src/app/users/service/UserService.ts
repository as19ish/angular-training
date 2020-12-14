import { Injectable } from '@angular/core';
import { IUser } from '../IUser';
import { IUserService } from './IUserService';
import {USERS} from '../mock-users';

@Injectable({
    providedIn: 'root'
})
export class UserService implements IUserService {
    public list(): IUser[] {
        return JSON.parse(JSON.stringify(USERS));
    }


}