import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-contact-prospecto',
  templateUrl: './contact-prospecto.component.html',
  styleUrls: ['./contact-prospecto.component.css'],
})
export class ContactProspectoComponent implements OnInit {
  id: number;
  public client: Client;
  constructor(
    private activeteRoute: ActivatedRoute,
    private clientService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activeteRoute.snapshot.params['id'];
    this.client = this.clientService.obtenerClient(this.id);
  }

  guardar() {
    this.router.navigate(['/dashboard-index']);
  }
  cancelar() {
    this.router.navigate(['/dashboard-index']);
  }
}
