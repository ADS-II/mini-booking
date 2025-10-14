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
    path: 'error',
    component: ErrorComponent,
  },
  // esta ruta dirige al catalogo
  {
    path: 'catalogo',
    component: CatalogoComponent,
  },
  // esta ruta dirige a las reservas del usuario
  {
    path: 'Mis Reservas',
    component: CatalogoComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];
