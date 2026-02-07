import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

import { FeedbackListComponent } from './components/feedback-list/feedback-list';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register'; // Import new component

// Guard: Checks if user is ADMIN
const adminGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isAdmin() ? true : router.createUrlTree(['/login']);
};

// Guard: Checks if user is LOGGED IN (User or Admin)
const userGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.getRole() ? true : router.createUrlTree(['/login']);
};

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Added Register path
  
  // Changed path to 'feedback-form' to match Navbar link
  { path: 'feedback-form', component: FeedbackFormComponent, canActivate: [userGuard] },
  
  // Only Admin can see the Dashboard
  { path: 'dashboard', component: FeedbackListComponent, canActivate: [adminGuard] },
  
  // Wildcard route to handle "Page Not Found" (Usability points)
  { path: '**', redirectTo: 'login' } 
];