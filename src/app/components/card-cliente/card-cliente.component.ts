import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.css'],
})
export class CardClienteComponent implements OnInit {
  @Input() listaDatos: Array<Client>;
  constructor() {}

  ngOnInit(): void {
    console.log('listaDatos :>> ', this.listaDatos);
  }
}
