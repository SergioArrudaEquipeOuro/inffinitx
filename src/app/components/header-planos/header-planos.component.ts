import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-planos',
  templateUrl: './header-planos.component.html',
  styleUrls: ['./header-planos.component.css']
})
export class HeaderPlanosComponent {
  @Input() header: string = "Header";
  @Input() planos: string = "planos";
}
