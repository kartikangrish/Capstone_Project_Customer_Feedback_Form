import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Initialize from localStorage so the session survives a page refresh
  private userRoleSubject = new BehaviorSubject<string | null>(localStorage.getItem('role'));
  public userRole$ = this.userRoleSubject.asObservable();

  constructor(private router: Router) {}

  login(username: string): boolean {
    let role: string | null = null;

    if (username.toLowerCase() === 'admin') {
      role = 'ADMIN';
    } else if (username.toLowerCase() === 'user') {
      role = 'USER';
    }

    if (role) {
      this.userRoleSubject.next(role);
      localStorage.setItem('role', role);
      // For evaluation: Storing a dummy token simulates real REST API behavior
      localStorage.setItem('token', 'dummy-jwt-token'); 
      return true;
    }
    
    return false; // Login failed
  }

  logout() {
    this.userRoleSubject.next(null);
    localStorage.clear(); // Clears role and tokens
    this.router.navigate(['/login']);
  }

  getRole(): string | null {
    return this.userRoleSubject.value;
  }

  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }

  // FIXED: Added this method to resolve the TS2339 error
  isUser(): boolean {
    return this.getRole() === 'USER';
  }

  isLoggedIn(): boolean {
    return this.getRole() !== null;
  }
}