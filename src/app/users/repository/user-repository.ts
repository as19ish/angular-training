import { Injectable } from '@angular/core';
import { IUser } from '../IUser';
import {USERS} from '../mock-users';
import { User } from '../User';

@Injectable({
    providedIn: 'root'
})
export class UserRepository {

    private users: User[];

    constructor() {
        this.users = USERS.map((user: IUser) => new User({...user}));

    }

    list() {
        return this.users;
    }

    delete(id: number) {
        this.users = this.users.filter((user: any) => user.id != id);
    }

}