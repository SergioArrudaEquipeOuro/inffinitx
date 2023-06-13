import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor (
    private router: Router
  ){}

    nomeUsuario:string = '';

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

  areaCliente(){
    /* if(localStorage.getItem('login') == 'logado'){
      this.router.navigateByUrl('/cursos')
    }else{
      this.router.navigateByUrl('/login')
    } */

    window.location.href = 'https://inffinitex.com/cadastro';
    
  }
  logout(){
    localStorage.removeItem('nome');
    this.router.navigateByUrl('/home');
    localStorage.setItem('login', 'deslogado');
    
  }
  
  
  showLogout: boolean = false;

  isLogged: boolean = false;
  
  ngOnInit(): void {
    this.isLogged = localStorage.getItem('login') === 'logado';
    if(localStorage.getItem('nome') !== null){
      this.nomeUsuario = localStorage.getItem('nome') ?? '';
    }
    
  }

  goToCadastroPage() {
    window.location.href = 'https://inffinitex.com/cadastro';
  }
}
  