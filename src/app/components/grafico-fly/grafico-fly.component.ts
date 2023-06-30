import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-fly',
  templateUrl: './grafico-fly.component.html',
  styleUrls: ['./grafico-fly.component.css']
})
export class GraficoFlyComponent {

  nome: string = 'ativo';
  preco: string = '0000';
  capMercado: string = '0000';
  capMercadoTotalmenteDiluida: string = '0000';
  volume24h: string = '0000';
  aaveData: any;

  


  ngOnInit(): void {
    this.fetchAaveData();
  }

  fetchAaveData(): void {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=litecoin')
      .then(response => response.json())
      .then(data => {
        this.aaveData = data[0];
        console.log(this.aaveData);
        this.nome = this.aaveData.name;
        this.preco = this.aaveData.current_price;
        this.capMercado = this.formatNumber(this.aaveData.market_cap);
        this.capMercadoTotalmenteDiluida = this.formatNumber(this.aaveData.fully_diluted_valuation);
        this.volume24h = this.formatNumber(this.aaveData.total_volume);

       
      })
      .catch(error => {
        console.error('Erro ao consultar a API:', error);
      });
  }

  formatNumber(number: number): string {
    return number.toLocaleString('en-US');
  }

  
}
