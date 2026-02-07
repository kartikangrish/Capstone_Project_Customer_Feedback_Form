import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: [] // Using Global CSS
})
export class RegisterComponent {
  // Model linked to the form
  user = {
    fullName: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onRegister() {
    console.log('User registered:', this.user);
    // Here you would normally call your backend service
    alert('Registration Successful! Redirecting to login page.');
    this.router.navigate(['/login']);
  }
}