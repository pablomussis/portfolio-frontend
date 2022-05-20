import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://npinti.ddns.net:9008/api/login";
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) { 
    console.log("El servicio de autenticación está corriendo !!");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  iniciarSesion(credenciales:any): Observable<any>
  {
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUserSubject', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }));
  }

  get UsuarioAutenticado()
  {
    return this.currentUserSubject.value;
  }

}