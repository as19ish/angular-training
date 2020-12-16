import { DateFormat } from '../decorators/DateFormat';
import { Roles } from '../types/Roles';
import { IUser } from './IUser';

export class User implements IUser {
    id: number;
    firstName: string;
    middleName: string | undefined;
    lastName: string;
    email: string;
    phone: number;
    address: string | undefined;
    role: Roles;
    createdAt: Date;
    modifiedAt: Date | undefined;
    isInEditMode: boolean;
    updatedUser: IUser;
    
    @DateFormat('createdAt')
    creationDate?: string;

    @DateFormat('modifiedAt')
    modificationDate?: string;

    constructor(user: IUser) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.middleName = user.middleName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.phone = user.phone;
        this.role = user.role;
        this.address = user.address;
        this.createdAt = user.createdAt;
        this.modifiedAt = user.modifiedAt;
        this.isInEditMode = false;
        this.updatedUser = this;
    }

    getRole() {
        return Roles[this.role];
    }

    openInUpdateMode() {
        this.isInEditMode = true;
    }

    update() {
        this.firstName = this.updatedUser.firstName;
        this.middleName = this.updatedUser.middleName;
        this.lastName = this.updatedUser.lastName;
        this.email = this.updatedUser.email;
        this.phone = this.updatedUser.phone;
        this.role = this.updatedUser.role;
        this.address = this.updatedUser.address;
        this.isInEditMode = false;
    }

    cancelUpdate() {
        this.isInEditMode = false;
        this.updatedUser = this;
    }
    
}