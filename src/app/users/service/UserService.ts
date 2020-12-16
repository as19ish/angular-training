import { Injectable } from '@angular/core';
import { IUserService } from './IUserService';
import { UserRepository } from '../repository/user-repository';
import { User } from '../User';

@Injectable({
    providedIn: 'root'
})
export class UserService implements IUserService {
    constructor(
        private userRepository: UserRepository
    ) {}
    public list(): User[] {
        return this.userRepository.list();
    }

    public delete(id: number): void {
        this.userRepository.delete(id);

    }


}