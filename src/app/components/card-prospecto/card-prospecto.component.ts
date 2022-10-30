import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-card-prospecto',
  templateUrl: './card-prospecto.component.html',
  styleUrls: ['./card-prospecto.component.css'],
})
export class CardProspectoComponent implements OnInit {
  @Input() listaDatos: Array<Client>;
  constructor() {}

  ngOnInit(): void {
    console.log('listaDatos :>> ', this.listaDatos);
  }
}
