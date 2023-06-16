import { Component } from '@angular/core';

@Component({
  selector: 'app-investir-agora',
  templateUrl: './investir-agora.component.html',
  styleUrls: ['./investir-agora.component.css']
})
export class InvestirAgoraComponent {

  goToCadastroPage() {
    window.location.href = 'https://inffinitex.com/cadastro';
  }

}
