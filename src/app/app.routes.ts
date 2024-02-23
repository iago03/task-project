import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'sport',
    loadComponent: () =>
      import('./pages/sport/sport.component').then((m) => m.SportComponent),
  },
  {
    path: 'live',
    loadComponent: () =>
      import('./pages/live/live.component').then((m) => m.LiveComponent),
  },
  {
    path: 'slots',
    loadChildren: () => import('./pages/slots/slots.routes'),
  },
  {
    path: 'casino',
    loadComponent: () =>
      import('./pages/casino/casino.component').then((m) => m.CasinoComponent),
  },
];
