// user.service.ts
import { Injectable } from '@angular/core';

export interface User {
  fullName: string;
  email: string;
  dob: string;
  gender: string;
  password: string;
  interests: string;
  experience: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }
}
