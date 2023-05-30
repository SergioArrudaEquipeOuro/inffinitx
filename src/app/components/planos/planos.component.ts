import { Component } from '@angular/core';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent {

  buttonState = false;

  toggleButton() {
    this.buttonState = !this.buttonState;
  }
  

}
