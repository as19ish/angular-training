import { Roles } from '../types/Roles';

export interface IUser{
    id: number,
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    phone: number;
    address?: string;
    role: Roles;
    createdAt: Date;
    modifiedAt?: Date;
    isInEditMode?: boolean;
    updatedUser?: IUser;
}
