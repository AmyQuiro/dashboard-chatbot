import { Client } from '../models/client';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor() {}

  obtenerLista() {
    let client1 = new Client();
    client1.email = 'amy_quiroga_quisbert@gmail.com';
    client1.facebookId = '1231231';
    client1.fotoUrl = 'https://www.w3schools.com/html/img_girl.jpg';
    client1.nombre = 'Amy Quiroga Quisbert';
    client1.celular = '77874723';

    let client2 = new Client();
    client2.email = 'juan_perez@gmail.com';
    client2.facebookId = '978302';
    client2.fotoUrl = 'https://www.w3schools.com/html/img_girl.jpg';
    client2.nombre = 'Juan Perez';
    client2.celular = '79293662';

    let listClient: Client[] = [];
    listClient.push(client1);
    listClient.push(client2);
    return listClient;
    // let reqHeader = new HttpHeaders();
    // reqHeader.append('Content-Type', 'application/json');
    // let paramsService = new HttpParams();
    // paramsService = paramsService.append('status', estado.toString());
    // paramsService = paramsService.append('search', criterio);
    // paramsService = paramsService.append(
    //   'list_service_code',
    //   service_code.join(',')
    // );
    // console.log('params :>> ', paramsService);
    // console.log('this.PerfilURL :>> ', this.PerfilURL);
    // return this.httpClient
    //   .get(this.PerfilURL + '/getRoles', {
    //     params: paramsService,
    //     headers: reqHeader,
    //   })
    //   .pipe(
    //     map((response: ResponseAPIMultipago) => {
    //       console.log('response perfil :>> ', response);
    //       return response;
    //     }),
    //     catchError((error) => {
    //       console.log('error obtenerLista perfiles :>> ', error);
    //       return throwError(error);
    //     })
    //   );
  }
}
