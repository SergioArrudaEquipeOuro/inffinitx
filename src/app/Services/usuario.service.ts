import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from '../Model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}user/new`, usuario);
  }

  buscarEmail(email: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseURL}user/email/${email}`);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseURL}login`, { username, password }).pipe(
      tap(response => {
        // Armazene o token de autenticação no armazenamento local do navegador
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout(): void {
    // Remova o token de autenticação do armazenamento local do navegador
    localStorage.removeItem('token');
  }
  
  isAuthenticated(): boolean {
    // Verifique se o token de autenticação está presente no armazenamento local do navegador
    return !!localStorage.getItem('token');
  }
}
