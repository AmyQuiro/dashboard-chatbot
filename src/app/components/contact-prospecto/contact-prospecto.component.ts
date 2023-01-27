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
  id: String;
  public client: Client;
  public load : boolean = false;
  public mensaje : String = '' ;
  constructor(
    private activeteRoute: ActivatedRoute,
    private clientService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activeteRoute.snapshot.params['id'];
    //this.client = this.clientService.obtenerClient(this.id);
  
    this.clientService.get('api/client', {}).then((datos : any[])=>{
      this.client = datos.map(a => {
        let c = new Client();
          c.email = a.email;
          c.facebookId =a.facebookId;
          c.fotoUrl = a.profilePic;
          c.nombre = a.firstName + ' ' + a.lastName;
          c.celular = a.phone;
          c.id = a._id;
          c.estado = a.status
          return c;
       }).filter(v => v.id == this.id)[0];
       this.load = true;
    })
  }

  guardar() {
    this.clientService.post('enviarcorreo', { correo : this.client.email , mensaje : this.mensaje }).then(data=>{
    })

    this.clientService.post('api/updateClientStatus' , { id : this.client.id , status : 2}).then(data=>{
       this.router.navigate(['/dashboard-index']);
    })
    
  }
  cancelar() {
    this.router.navigate(['/dashboard-index']);
  }

  public onValueChange(event: Event): void {
    this.mensaje = (event.target as any).value;
  }
}
