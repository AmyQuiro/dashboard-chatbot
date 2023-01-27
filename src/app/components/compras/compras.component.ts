import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  id: String;
  listaDatos : any[] = [];
  load : boolean = false;
  constructor(private clientService: ClienteService,private activeteRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeteRoute.snapshot.params['id'];
    this.clientService.get('api/compra',{ client_id : this.id}).then((datos : any[])=>{
      this.listaDatos = datos;
      this.load = true;
    })
  }

}
