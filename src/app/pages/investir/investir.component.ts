import { Component } from '@angular/core';

@Component({
  selector: 'app-investir',
  templateUrl: './investir.component.html',
  styleUrls: ['./investir.component.css']
})
export class InvestirComponent {

  goToCadastroPage() {
    window.location.href = 'https://inffinitex.com/cadastro';
  }

}
