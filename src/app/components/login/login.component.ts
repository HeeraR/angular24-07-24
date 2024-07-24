import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin(): void {
    console.log('Attempting to login with:', this.loginData);
  
    const usersFromStorage = localStorage.getItem('users');
    if (usersFromStorage) {
      const users: User[] = JSON.parse(usersFromStorage);
      console.log('Users retrieved from storage:', users);
  
      const user = users.find(user => user.email === this.loginData.email && user.password === this.loginData.password);
      if (user) {
        console.log('User found:', user);
        localStorage.setItem('currentUser', JSON.stringify(user)); 
        alert('Login successful!');
        this.router.navigate(['./users']);  
      } else {
        console.log('No matching user found.');
        alert('Invalid email or password.');
      }
    } else {
      console.log('No users found in storage.');
      alert('No users found. Please register first.');
    }
  }
}