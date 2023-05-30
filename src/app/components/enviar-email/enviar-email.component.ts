import { Component, Input  } from '@angular/core';

interface User {
  firstName: string;
  email: string;
  assunto: string;
  mensagem: string;
  telefone: string;
}


@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.css']
})
export class EnviarEmailComponent {

  
  user: User = {
    firstName: '',
    email: '',
    assunto: '',
    mensagem: '',
    telefone: ''
  };

  registerUser() {
    console.log('Dados do usuário:', this.user);
    
    // Implemente a lógica de envio para o banco de dados aqui
  }

  @Input()
  width:number = 200;

}
