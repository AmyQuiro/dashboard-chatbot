import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-card-cliente-recurrente',
  templateUrl: './card-cliente-recurrente.component.html',
  styleUrls: ['./card-cliente-recurrente.component.css'],
})
export class CardClienteRecurrenteComponent implements OnInit {
  @Input() listaDatos: Array<Client>;
  constructor(private router : Router) {}

  ngOnInit(): void {
    //console.log('listaDatos :>> ', this.listaDatos);
  }

  vercompras(id : number){
    this.router.navigate(['/compras/' + id.toString()]);
  }
}
