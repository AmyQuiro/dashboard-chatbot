import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { DashboardIndexComponent } from './components/dashboard-index/dashboard-index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardProspectoComponent } from './components/card-prospecto/card-prospecto.component';
import { CardContactadoComponent } from './components/card-contactado/card-contactado.component';
import { CardClienteComponent } from './components/card-cliente/card-cliente.component';
import { CardClienteRecurrenteComponent } from './components/card-cliente-recurrente/card-cliente-recurrente.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ContactProspectoComponent } from './components/contact-prospecto/contact-prospecto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComprasComponent } from './components/compras/compras.component';
import { LoginComponent } from './components/login/login.component';
import { PromocionComponent } from './components/promocion/promocion.component';
@NgModule({
  declarations: [AppComponent, DashboardIndexComponent, CardProspectoComponent, CardContactadoComponent, CardClienteComponent, CardClienteRecurrenteComponent, ClientDetailsComponent, ContactProspectoComponent, ComprasComponent, LoginComponent, PromocionComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
