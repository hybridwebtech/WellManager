import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { BasemapComponent } from './components/basemap/basemap.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'basemap',
    component: BasemapComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
