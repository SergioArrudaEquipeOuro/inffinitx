import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

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
  }
}
