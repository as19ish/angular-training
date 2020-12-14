import { IUser } from './IUser';

export const USERS: IUser[] = [
    {
        id: 1,
        firstName: 'Megha',
        middleName: '',
        lastName: 'Verma',
        email: 'megha@gmail.com',
        phone: 7985223304,
        role: 'Admin',
        address: 'Lucknow',
        createdOn: new Date().toDateString(),
        modifiedOn: new Date().toDateString(),
        editable: false
    },
    {
        id: 2,
        firstName: 'Naha',
        middleName: 'Kumar',
        lastName: 'Sharma',
        email: 'nehasharma@gmail.com',
        phone: 7985223304,
        role: 'Admin',
        address: 'Lucknow',
        createdOn: new Date().toDateString(),
        modifiedOn: new Date().toDateString(),
        editable: false
    },
    {
        id: 3,
        firstName: 'Arbaaz',
        middleName: '',
        lastName: 'Khan',
        email: 'arbaazkhan@gmail.com',
        phone: 7985223304,
        role: 'Admin',
        address: 'Lucknow',
        createdOn: new Date().toDateString(),
        modifiedOn: new Date().toDateString(),
        editable: false
    }
];
