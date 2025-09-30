import {
  Routes,
} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { ErrorComponent } from './pages/error/error.component';
import { authGuardFn } from '@auth0/auth0-angular';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  // agregar una nueva ruta que redirija a catalogo
  {
    path: 'catalogo',   // 👈 nueva ruta
    component: CatalogoComponent,
    // canActivate: [authGuardFn], // opcional si quieres protegerlo
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];
