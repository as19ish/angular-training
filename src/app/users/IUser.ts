export interface IUser{
    id: number,
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    phone: number;
    address?: string;
    role: string;
    createdOn: Date;
    modifiedOn?: Date;
    isInEditMode?: boolean;
    updatedUser?: IUser;
}
