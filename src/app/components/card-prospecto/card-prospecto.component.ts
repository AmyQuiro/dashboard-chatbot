import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-prospecto',
  templateUrl: './card-prospecto.component.html',
  styleUrls: ['./card-prospecto.component.css'],
})
export class CardProspectoComponent implements OnInit {
  @Input() listaDatos: Array<Client>;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('listaDatos :>> ', this.listaDatos);
  }

  contactar(id: number): void {
    // alert(id);
    this.router.navigate(['/contact-prospecto/' + id.toString()]);
  }
}
