import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../../Model/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: Usuario[] = [];

  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    if(localStorage.getItem('nome') == null){
      localStorage.setItem('login', 'deslogado')
    }
    /* localStorage.setItem('login', 'deslogado'); */
  }

  goToCadastroPage() {
    window.location.href = 'https://inffinitex.com/cadastro';
  }
  
}
