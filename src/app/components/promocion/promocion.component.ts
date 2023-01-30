import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.component.html',
  styleUrls: ['./promocion.component.css']
})
export class PromocionComponent implements OnInit {

  constructor(  private router: Router,private clientService: ClienteService,) { }
  public mensaje : String = '' ;
  public name : String = '' ;
  ngOnInit(): void {
  }

public onNameChange(event:Event):void{
  this.name=(event.target as any).value;
}

  public onMessageChange(event: Event): void {
    this.mensaje = (event.target as any).value;
  }
  enviar() {
    let datos={
      Name: this.name,
      grupo:1,
      message:this.mensaje,
      status:1
    };
    this.clientService.post('api/promocion' , datos).then(data=>{
      console.log(data) 
      // this.router.navigate(['/dashboard-index']);
      window.location.reload();
    })


    // this.clientService.post('enviarcorreo', { correo : this.client.email , mensaje : this.mensaje }).then(data=>{
    // })

    // this.clientService.post('api/client/updateClientStatus' , { id : this.client.id , status : 2}).then(data=>{
    //   console.log(data) 
    //   this.router.navigate(['/dashboard-index']);
    // })
    
  }
  cancelar() {
    window.location.reload();
  }

}
