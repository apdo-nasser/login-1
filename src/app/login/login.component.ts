import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LeftSideComponent } from '../shared/left-side/left-side.component'; // Import LeftSideComponent

@Component({
  selector: 'app-login',
  standalone: true,  // Standalone component
  imports: [CommonModule, FormsModule, LeftSideComponent], // Add LeftSideComponent here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  message: string = '';

  constructor(private router: Router) {}

  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const storedUser = users.find(
      (user: any) =>
        user.email === this.loginData.email &&
        user.password === this.loginData.password
    );

    if (storedUser) {
      this.router.navigate([`/${storedUser.role}-dashboard`]);
    } else {
      this.message = 'Either email or password is not correct. Please try again.';
    }
  }

  forgotPassword() {
    this.router.navigate(['/reset-password']);
  }

  onRegisterClick() {
    this.router.navigate(['/register']);
  }
}
