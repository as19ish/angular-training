import { Injectable } from '@angular/core';
import { CRUDRepository } from 'src/app/repository/CRUDRepository';
import { IUser } from '../IUser';
import {USERS} from '../mock-users';
import { User } from '../User';

@Injectable({
    providedIn: 'root'
})
export class UserRepository extends CRUDRepository<User> {

    constructor() {
        super(USERS.map((user: IUser) => new User({...user})));
    }

}