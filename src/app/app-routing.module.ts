import { ContactProspectoComponent } from './components/contact-prospecto/contact-prospecto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardIndexComponent } from './components/dashboard-index/dashboard-index.component';
import { ComprasComponent } from './components/compras/compras.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'dashboard-index', component: DashboardIndexComponent },
  { path: 'contact-prospecto/:id', component: ContactProspectoComponent },
  { path: 'compras/:id', component: ComprasComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/dashboard-index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
