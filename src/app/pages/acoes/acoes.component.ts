import { Component } from '@angular/core';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css']
})
export class AcoesComponent {

  goToCadastroPage() {
    window.location.href = 'https://inffinitex.com/cadastro';
  }
  

}
