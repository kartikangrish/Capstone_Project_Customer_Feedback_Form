import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Added RouterModule for navigation links
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Added RouterModule here
  templateUrl: './login.component.html',
  styleUrls: [] // Removed internal styles as we are using Bootstrap/Global CSS
})
export class LoginComponent {
  username = '';
  password = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Logic for role-based redirection
    const success = this.authService.login(this.username);
    
    if (success) {
      if (this.authService.isAdmin()) {
        this.router.navigate(['/dashboard']);
      } else {
        // Updated to 'feedback-form' to match our app.routes.ts path
        this.router.navigate(['/feedback-form']);
      }
    } else {
      // For the 6 points in Global Exception Handling, 
      // we'll eventually replace this alert with a professional UI toast.
      alert('Invalid username! Try "admin" or "user".');
    }
  }
}