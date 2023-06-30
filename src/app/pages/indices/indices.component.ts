import { Component } from '@angular/core';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent {

  goToCadastroPage() {
    window.location.href = 'https://inffinitex.com/cadastro';
  }
  

}
