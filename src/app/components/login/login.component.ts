import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../Model/usuario';
import { UsuarioService } from 'src/app/Services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private service: UsuarioService) { }

  user: any = {
    username: '',
    password: ''
  }
  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  passwordFieldType: string = 'password';

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    this.passwordFieldType = this.showPassword ? 'text' : 'password';
  }

  login(): void {
    const rotaDesejada = '/cursos';
    this.router.navigateByUrl(rotaDesejada)

    /* ------------------------------------ */
   
   
    /* this.user.username = this.username;
    this.user.password = this.password;
    this.email(this.user.username, this.user.password) */
  }

  logout(){
    localStorage.removeItem('nome');
    this.router.navigateByUrl('/home');
    localStorage.setItem('login', 'deslogado');
  }
  
  
  
  
  
  email(email: string , senha :string) {
    this.service.buscarEmail(email).subscribe(
      (user: any) => {
        this.user = user;
        /* console.log(this.user); */
        
        if(user.password == senha){
          const rotaDesejada = '/cursos';
          localStorage.setItem('nome', user.nome);
          localStorage.setItem('login', 'logado');
          this.router.navigateByUrl(rotaDesejada)
        }else{
          alert('Email ou senha incorretos.')
        }
        
      },
      (error: any) => {
        console.error(error);
        alert('Email não cadastrado')
      }
    );
  }
 
  
}
