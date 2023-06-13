import { Component } from '@angular/core';

@Component({
  selector: 'app-plano-promo',
  templateUrl: './plano-promo.component.html',
  styleUrls: ['./plano-promo.component.css']
})
export class PlanoPromoComponent {

  buttonState = false;

  toggleButton() {
    this.buttonState = !this.buttonState;
  }
  

}
