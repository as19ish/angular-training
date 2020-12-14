import { Component, OnInit } from '@angular/core';
import { IUser } from './IUser';
import { UserService } from './service/UserService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { 
    this.users = [];
    this.eUser = {} as IUser;
  }

  buttonText = 'Load User';
  users: IUser[];
  eUser: IUser;

  loadUser() {
    this.buttonText = 'Refresh Data'; 
    this.users = this.userService.list();   
  }

  updateUser(id: number) {
    const user = this.users.find(userObject => userObject.id === id);
    if (user){
      user.editable = true;
      this.eUser = Object.assign({}, user);
    }
  }

  saveUser(id: number) {
    const users = this.users.filter(userObject => userObject.id !== id);
    this.eUser.editable = false;
    users.push(this.eUser);
    this.eUser = Object.assign({}, {}) as IUser;
    const sortedUsers = users.sort((a, b) => a.id - b.id); // NOSONAR
    this.users = sortedUsers
  }

  cancelUpdate(id: number) {
    const user = this.users.find(userObject => userObject.id === id);
    if (user){
      user.editable = false;
      this.eUser = {} as IUser;
    }
  }

  deleteUser(id: number) {
    const users = this.users.filter(userObject => userObject.id !== id);
    this.users = users;
  }

  ngOnInit(): void {
  }

}
