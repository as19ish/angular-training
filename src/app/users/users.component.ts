import { Component, OnInit } from '@angular/core';
import { UserService } from './service/UserService';
import { User } from './User';

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
  }

  buttonText = 'Load User';
  users: User[];

  loadUser() {
    this.buttonText = 'Refresh Data'; 
    this.users = this.userService.list();   
  }


  deleteUser(id: number) {
    this.userService.delete(id);
    this.users = this.userService.list();
  }

  ngOnInit(): void {
  }

}
