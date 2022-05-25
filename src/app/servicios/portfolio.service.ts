import { Injectable } from '@angular/core';
// Permite recuperar desde un servidor web el archivo JSON
import { HttpClient } from '@angular/common/http';
// Colección de EVENTOS 
import { Observable } from 'rxjs';

// Decorador @Injectable, para que este servicio sea INJECTADO en los componentes
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  //url: string = "http://npinti.ddns.net:9008/api/";
  //url: string = "localhost";

  // Dentro del constructor importamos HttpClient
  constructor(private http:HttpClient) { }
  
  // obtenerDatos, MÉTODO que SERÁ CONSUMIDO desde un/nos componente/s
  // Observable<any>, los componentes deben suscribirse al este para que le lleguen los datos
  obtenerDatos():Observable<any>{
    //console.log("El servicio Portfolio está corriendo ..");
    
    return this.http.get<any>('./assets/data/data.json');

    //return this.http.get<any>(this.url+"persona");
  }
}
