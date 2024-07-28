import { Component, OnInit } from '@angular/core';
import { User } from './users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  ngOnInit(): void {
    const usersFromStorage = localStorage.getItem('users');
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage) as User[];
    }
  }

  deleteUser(index: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
}
}