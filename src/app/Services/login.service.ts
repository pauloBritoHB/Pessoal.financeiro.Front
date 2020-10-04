import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './../../Models/Usuario';
import { ResultUsuario } from './../../Models/ResultPadrao';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'https://localhost:44303/Login';
  constructor(private http: HttpClient) { }

  logar(usuario: Usuario): Observable<ResultUsuario> {
    return this.http.post<ResultUsuario>(this.url + '/Logar' , usuario);
  }

}
