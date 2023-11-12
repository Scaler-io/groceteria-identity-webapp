import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { breadcrumb: { label: 'Dashboard' } },
  },
  {
    path: 'api-clients',
    loadChildren: () => import('./features/api-client/api-client.module').then(m => m.ApiClientModule),
    data: { breadcrumb: { label: 'Api clients' } },
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
