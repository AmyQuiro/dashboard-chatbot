import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-card-contactado',
  templateUrl: './card-contactado.component.html',
  styleUrls: ['./card-contactado.component.css'],
})
export class CardContactadoComponent implements OnInit {
  @Input() listaDatos: Array<Client>;
  constructor() {}

  ngOnInit(): void {
    console.log('listaDatos :>> ', this.listaDatos);
  }
}
