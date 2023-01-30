import { Client } from '../models/client';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  
  Url :String ='https://chatbotamy.herokuapp.com/';

  constructor(private http : HttpClient) {}

  

  get(nombreServicio , datos){
    return new Promise((res ,error)=>{
      datos = Object.entries(datos).map(e => e.join('=')).join('&');
      this.http.get(this.Url.concat(nombreServicio).concat('?').concat(datos)).subscribe({
        next : (respuesta : any)=>{
          res(respuesta)
        },error : (err)=>{
          console.log('====================================');
          console.log(err);
          console.log('====================================');
        }
      })
    });
  }

  
  post(nombreServicio , datos){
   
    return new Promise((res ,error)=>{
      
      this.http.post(this.Url.concat(nombreServicio), datos).subscribe({
        next : (respuesta : any)=>{
          res(respuesta)
        },
        error : (err)=>{
          //this.presentAlert('Error de conexión')
        }
      })
    });
  }

}
