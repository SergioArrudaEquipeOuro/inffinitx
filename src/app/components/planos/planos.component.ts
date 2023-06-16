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
  
  recargaPayPlayStore(){
    window.location.href = 'https://play.google.com/store/apps/details?id=com.recarga.recarga&hl=pt&referrer=kid%3D140xrecargapay.com.br%252F%26utm_medium%3Dreferral%26utm_source%3Drecargapay.com.br%26utm_campaign%3DBlockingLandingMobileWeb%26campaign%3DBrasilHomeCity%26utm_content%3D&pli=1';
  }
  recargaPayAppStore(){
    window.location.href = 'https://apps.apple.com/BR/app/id815221913?mt=8';
  }
}
