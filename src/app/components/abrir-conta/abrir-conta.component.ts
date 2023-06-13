import { Component } from '@angular/core';

@Component({
  selector: 'app-abrir-conta',
  templateUrl: './abrir-conta.component.html',
  styleUrls: ['./abrir-conta.component.css']
})
export class AbrirContaComponent {

  goToCadastroPage() {
    window.location.href = 'https://inffinitex.com/cadastro';
  }

}
