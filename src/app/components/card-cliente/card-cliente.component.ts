import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.css'],
})
export class CardClienteComponent implements OnInit {
  @Input() listaDatos: Array<Client>;
  constructor(private router : Router) {}

  ngOnInit(): void {
    //console.log('listaDatos :>> ', this.listaDatos);
  }

  vercompras(id : number){
    this.router.navigate(['/compras/' + id.toString()]);
  }
}
