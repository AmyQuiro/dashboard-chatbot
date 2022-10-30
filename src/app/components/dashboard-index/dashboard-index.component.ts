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

  constructor(private clientService: ClienteService) {}

  ngOnInit(): void {
    this.obtenerListado();
  }
  obtenerListado() {
    this.listaProspectos = this.clientService.obtenerLista();
  }
}
