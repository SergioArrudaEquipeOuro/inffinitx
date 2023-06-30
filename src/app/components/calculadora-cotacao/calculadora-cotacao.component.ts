import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora-cotacao',
  templateUrl: './calculadora-cotacao.component.html',
  styleUrls: ['./calculadora-cotacao.component.css']
})
export class CalculadoraCotacaoComponent {

  valorDolar:number = 0
  dolarData: any;
  nome: string = 'ativo';
  preco: string = '0000';
  capMercado: string = '0000';
  capMercadoTotalmenteDiluida: string = '0000';
  volume24h: string = '0000';

  @Input() valorCurso: number=1;

  ngOnInit(): void {
    this.fetchTetherData();
  }

  fetchTetherData(): void {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=tether')
      .then(response => response.json())
      .then(data => {
        this.dolarData = data[0];
        this.nome = this.dolarData.name;
        
        this.valorDolar = this.dolarData.current_price;
        this.preco = ((this.valorDolar + 0.13) * this.valorCurso).toFixed(2).replace('.', ',');



        this.capMercado = this.formatNumber(this.dolarData.market_cap);
        this.capMercadoTotalmenteDiluida = this.formatNumber(this.dolarData.fully_diluted_valuation);
        this.volume24h = this.formatNumber(this.dolarData.total_volume);
      })
      .catch(error => {
        console.error('Erro ao consultar a API:', error);
      });
  }

  formatNumber(number: number): string {
    return number.toLocaleString('en-US');
  }

}
