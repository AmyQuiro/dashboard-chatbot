import { Client } from './../../models/client';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css'],
})
export class DashboardIndexComponent implements OnInit {
  public listaProspectos: Array<Client> = new Array<Client>();
  public listaContactados: Array<Client> = new Array<Client>();
  public listaClientes: Array<Client> = new Array<Client>();
  public listaRecurrentes: Array<Client> = new Array<Client>();
  public load : boolean = false;
  public home : boolean = true ;
  constructor(private clientService: ClienteService) {}

  

  ngOnInit(): void {
    //this.obtenerListado();
    this.clientService.get('api/client', {}).then((datos : any[])=>{
      this.listaProspectos  = datos.map(a => {
        let c = new Client();
          c.email = a.email;
          c.facebookId =a.facebookId;
          c.fotoUrl = a.profilePic;
          c.nombre = a.firstName + ' ' + a.lastName;
          c.celular = a.phone;
          c.id = a._id;
          c.estado = a.status
          return c;
       }).filter(v => v.estado == 1)

       this.listaContactados  = datos.map(a => {
        let c = new Client();
          c.email = a.email;
          c.facebookId =a.facebookId;
          c.fotoUrl = a.profilePic;
          c.nombre = a.firstName + ' ' + a.lastName;
          c.celular = a.phone;
          c.id = a._id;
          c.estado = a.status
          return c;
       }).filter(v => v.estado == 2)

       this.listaClientes  = datos.map(a => {
        let c = new Client();
          c.email = a.email;
          c.facebookId =a.facebookId;
          c.fotoUrl = a.profilePic;
          c.nombre = a.firstName + ' ' + a.lastName;
          c.celular = a.phone;
          c.id = a._id;
          c.estado = a.status
          return c;
       }).filter(v => v.estado == 3)

       this.listaRecurrentes  = datos.map(a => {
        let c = new Client();
          c.email = a.email;
          c.facebookId =a.facebookId;
          c.fotoUrl = a.profilePic;
          c.nombre = a.firstName + ' ' + a.lastName;
          c.celular = a.phone;
          c.id = a._id;
          c.estado = a.status
          return c;
       }).filter(v => v.estado == 4)
       this.load = true;
    })
  }
  obtenerListado() {
    this.listaProspectos = this.clientService.obtenerLista();
  }

  menu(dato){
    this.home = dato;
  }
}
