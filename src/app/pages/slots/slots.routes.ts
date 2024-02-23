import { Route } from '@angular/router';
import { SlotsComponent } from './slots.component';

export default [
  {
    path: '',
    component: SlotsComponent,
    children: [
      {
        path: '',
        redirectTo: 'category',
        pathMatch: 'full',
      },

      {
        path: 'category',
        loadComponent: () =>
          import('./content/content.component').then((c) => c.ContentComponent),
      },
    ],
  },
] satisfies Route[];
