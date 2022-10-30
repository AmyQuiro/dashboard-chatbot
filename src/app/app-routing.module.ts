import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardIndexComponent } from './components/dashboard-index/dashboard-index.component';

const routes: Routes = [
  { path: 'dashboard-index', component: DashboardIndexComponent },
  { path: '', redirectTo: '/dashboard-index', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard-index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
