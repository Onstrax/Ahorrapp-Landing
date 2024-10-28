import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },  // Página de inicio es el login
  { path: 'landing', component: LandingComponent },
  { path: '**', redirectTo: '' }
];
