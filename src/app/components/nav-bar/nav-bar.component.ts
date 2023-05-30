import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isNavbarOpen = false;
  isInvestirSubMenuOpen = false;
  isTraderSubMenuOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  toggleInvestirSubMenu() {
    this.isInvestirSubMenuOpen = !this.isInvestirSubMenuOpen;
    this.isTraderSubMenuOpen = false; // Fecha o submenu Trader ao abrir o submenu Investir
  }

  toggleTraderSubMenu() {
    this.isTraderSubMenuOpen = !this.isTraderSubMenuOpen;
    this.isInvestirSubMenuOpen = false; // Fecha o submenu Investir ao abrir o submenu Trader
  }
}
