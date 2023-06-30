import { Component, OnInit } from '@angular/core';

interface Criptomoeda {
  nome: string;
  preco: number;
  capMercado: string;
  capMercadoTotalmenteDiluida: string;
  volume24h: string;
}

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {
  criptomoedas: Criptomoeda[] = [];
  criptomoedasFiltradas: Criptomoeda[] = [];
  filtroMoeda = '';

  ngOnInit(): void {
    this.fetchCriptomoedasData();
  }

  fetchCriptomoedasData(): void {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(response => response.json())
      .then(data => {
        this.criptomoedas = data.map((criptomoeda: any) => ({
          nome: criptomoeda.name,
          preco: criptomoeda.current_price,
          capMercado: this.formatNumber(criptomoeda.market_cap),
          capMercadoTotalmenteDiluida: this.formatNumber(criptomoeda.fully_diluted_valuation),
          volume24h: this.formatNumber(criptomoeda.total_volume)
        }));

        this.filtrarCriptomoedas();
      })
      .catch(error => {
        console.error('Erro ao consultar a API:', error);
      });
  }

  filtrarCriptomoedas(): void {
    if (!this.filtroMoeda) {
      this.criptomoedasFiltradas = this.criptomoedas;
    } else {
      this.criptomoedasFiltradas = this.criptomoedas.filter(criptomoeda =>
        criptomoeda.nome.toLowerCase().includes(this.filtroMoeda.toLowerCase())
      );
    }
  }

  formatNumber(number: number): string {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(number);
  }

  
  goToCadastroPage() {
    window.location.href = 'https://inffinitex.com/cadastro';
  }
  
}
