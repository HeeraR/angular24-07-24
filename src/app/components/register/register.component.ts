import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationData = {
    username: '',
    email: '',
    password: ''
  };
  registrationSuccess: boolean = false;

  onSubmit(): void {
    console.log('Registration data:', this.registrationData);
    this.registrationSuccess = true;
  }
}
