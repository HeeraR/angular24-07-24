import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  loginSuccess: boolean = false;

  constructor(private router: Router) { }

  onSubmit(): void {
    console.log('Login data:', this.loginData);
    if (this.loginData.email === 'test@example.com' && this.loginData.password === 'password') {
      this.loginSuccess = true;
      setTimeout(() => {
        this.router.navigate(['/user-list']);
      }, 2000); // Navigate to user list after 2 seconds
    } else {
      this.loginSuccess = false;
    }
  }
}
