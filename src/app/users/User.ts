import { IUser } from './IUser';

export class User implements IUser {
    id: number;
    firstName: string;
    middleName: string | undefined;
    lastName: string;
    email: string;
    phone: number;
    address: string | undefined;
    role: string;
    createdOn: Date;
    modifiedOn: Date | undefined;
    isInEditMode: boolean;
    updatedUser: IUser;

    constructor(user: IUser) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.middleName = user.middleName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.phone = user.phone;
        this.role = user.role;
        this.address = user.address;
        this.createdOn = user.createdOn;
        this.modifiedOn = user.modifiedOn;
        this.isInEditMode = false;
        this.updatedUser = this;
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