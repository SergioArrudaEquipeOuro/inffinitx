import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-tabela-transacao',
  templateUrl: './tabela-transacao.component.html',
  styleUrls: ['./tabela-transacao.component.css']
})
export class TabelaTransacaoComponent implements OnInit {

  aaveData: any;
  tableRows: any[] = [];
  downArrowCount: number = 0;
  currentDateTime: string = '';

  ngOnInit(): void {
    const loadTime = moment().format('DD-MM-YYYY HH:mm:ss');
    localStorage.setItem('loadTime', loadTime);

    this.fetchAaveData();

    this.generateInitialTableRows();
    this.updateTableRowsWithRandomDelay();
  }

  updateCurrentDateTime(): void {
    this.currentDateTime = moment().format('DD-MM-YYYY HH:mm:ss');
  }

  generateInitialTableRows(): void {
    for (let i = 0; i < 30; i++) {
      const currentSecond = moment().seconds();
      const randomSubtraction = Math.floor(Math.random() * 11) + 25; // Valor aleatório entre 25 e 35
      const subtractedSecond = currentSecond - randomSubtraction >= 0 ? currentSecond - randomSubtraction : 60 + (currentSecond - randomSubtraction);
      const dateTime = moment().subtract(subtractedSecond, 'seconds').format('DD-MM-YYYY HH:mm:ss');
      const percentage = (Math.random() * (1.22 - 0.10) + 0.10).toFixed(2);
      const value = this.calculateValue(percentage, false);
      const operation = this.generateRandomCode();

      this.tableRows.unshift({ dateTime, hasDownArrow: false, percentage, value, operation });
    }
  }

  updateTableRows(): void {
    this.tableRows.pop(); // Remove o último elemento do array
    this.addTableRow();
  }

  addTableRow(): void {
    const currentSecond = moment().seconds();
    let hasDownArrow = false;
    let hasNegativeValue = false;

    if (this.downArrowCount < 12) {
      hasDownArrow = Math.random() < 0.3;
      if (hasDownArrow) {
        this.downArrowCount++;
        hasNegativeValue = Math.random() < 0.5; // 50% de chance de gerar um valor negativo
      }
    } else {
      hasDownArrow = Math.random() < 0.5; // 50% de chance de gerar um valor negativo
      hasNegativeValue = hasDownArrow;
    }

    const dateTime = moment().format('DD-MM-YYYY HH:mm:ss');
    const percentage = (Math.random() * (1.22 - 0.10) + 0.10).toFixed(2);
    const value = this.calculateValue(percentage, hasNegativeValue);
    const operation = this.generateRandomCode();

    this.tableRows.unshift({ dateTime, hasDownArrow, percentage, value, operation });
  }

  updateTableRowsWithRandomDelay(): void {
    const randomDelay = Math.floor(Math.random() * 2000) + 2000; // Valor aleatório entre 2000 e 4000 (2 a 4 segundos)

    setTimeout(() => {
      this.updateCurrentDateTime();
      this.updateTableRows();
      this.updateTableRowsWithRandomDelay(); // Chama a função novamente após o tempo de espera
    }, randomDelay);
  }

  calculateValue(percentage: string, hasNegativeValue: boolean): number {
    const minValue = 0.01;
    const maxValue = 0.11;
    const parsedPercentage = parseFloat(percentage);

    let value = parsedPercentage * (maxValue - minValue) + minValue;
    if (hasNegativeValue) {
      value = -value;
    }

    return value;
  }

  generateRandomCode(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const minLength = 32;
    const maxLength = 32;
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

    let code = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }

    return code;
  }

  fetchAaveData(): void {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=aave')
      .then(response => response.json())
      .then(data => {
        this.aaveData = data[0];
        console.log(this.aaveData);
      })
      .catch(error => {
        console.error('Erro ao consultar a API:', error);
      });
  }
}
