import { Component } from '@angular/core';

@Component({
  selector: 'app-simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.css']
})
export class SimulacaoComponent {
  valorInicialFormat: number = 100;
  valorInicial: number = 100;
  rendimentoDiario: number = 0;
  rendimentoSemanal: number = 0;
  rendimentoMensal: number = 0;
  periodoSelecionado: string = 'semana';
  metodoInvestimento:string = 'conservador'
  formatoMoeda: any = { style: 'currency', currency: 'USD' };
  tabelaRendimento: any[] = [];
  mostrarGrafico: boolean = false;
  rendimentoDiarioPolpanca: number = 0;
  rendimentoSemanalPolpanca: number = 0;
  rendimentoMensalPolpanca: number = 0;
  rendimentoDiarioSelic: number = 0;
  rendimentoSemanalSelic: number = 0;
  rendimentoMensalSelic: number = 0;
  valorPoupanca: number = 0;
  valorSelic: number = 0;
  valor02: number = 0;
  valor1:number = this.valorInicial;
  valor2: number = this.valorInicial;
  valor3: number = this.valor02;
  

  calcularRendimento(): void {
    this.tabelaRendimento = [];
    if (this.valorInicial > 0) {
      let valorTotal = this.valorInicial;
      let valorTotalPolpanca = this.valorInicial; // Valor total para rendimento da poupança
      let valorTotalSelic = this.valorInicial; // Valor total para rendimento da SELIC
      let diasPeriodo = this.numeroDiasPeriodo();
      let diasPorSemana = 7;
      let semanas = 1;
      let ultimoDiaMes = 30; // Último dia do mês
      let metodo = 0

      if(this.metodoInvestimento === 'conservador'){
        metodo = 0.005
      }else if(this.metodoInvestimento === 'moderado'){
        metodo = 0.010
      }else if(this.metodoInvestimento === 'agressivo'){
        metodo = 0.011
      }



      for (let dia = 1; dia <= diasPeriodo; dia++) {
        this.rendimentoDiario = valorTotal * metodo; // 0.5% de rendimento diário
        this.rendimentoDiarioPolpanca = valorTotalPolpanca * 0.0002; // 0.2% de rendimento diário na poupança
        this.rendimentoDiarioSelic = valorTotalSelic * 0.0004; // 0.04% de rendimento diário na SELIC
        valorTotal += this.rendimentoDiario;
        valorTotalPolpanca += this.rendimentoDiarioPolpanca;
        valorTotalSelic += this.rendimentoDiarioSelic;
        if (this.periodoSelecionado === 'semana') {
          // No período de uma semana, mostra os 7 dias individualmente
          this.tabelaRendimento.push({
            semana: semanas,
            dia: dia,
            rendimento: this.rendimentoDiario,
            rendimentoPolpanca: this.rendimentoDiarioPolpanca,
            rendimentoSelic: this.rendimentoDiarioSelic,
            valorAcumulado: valorTotal,
            valorAcumuladoPolpanca: valorTotalPolpanca,
            valorAcumuladoSelic: valorTotalSelic
          });
          this.valor02 = valorTotal;
          this.valorPoupanca = valorTotalPolpanca;
          this.valorSelic = valorTotalSelic;
        } else if (this.periodoSelecionado === 'mes' && dia % diasPorSemana === 0) {
          // No período de um mês, mostra o rendimento por semana (a cada 7 dias)
          this.tabelaRendimento.push({
            semana: semanas,
            rendimento: this.rendimentoDiario * diasPorSemana,
            rendimentoPolpanca: this.rendimentoDiarioPolpanca * diasPorSemana,
            rendimentoSelic: this.rendimentoDiarioSelic * diasPorSemana,
            valorAcumulado: valorTotal,
            valorAcumuladoPolpanca: valorTotalPolpanca,
            valorAcumuladoSelic: valorTotalSelic
          });
          this.valor02 = valorTotal;
          this.valorPoupanca = valorTotalPolpanca;
          this.valorSelic = valorTotalSelic;
          semanas++;
        } else if (this.periodoSelecionado === 'ano' && dia % 30 === 0) {
          // No período de um ano, mostra o rendimento por mês (a cada 30 dias)
          let mes = Math.floor(dia / 30);
          this.tabelaRendimento.push({
            mes: mes,
            rendimento: this.rendimentoDiario * diasPorSemana * (dia / diasPorSemana),
            rendimentoPolpanca: this.rendimentoDiarioPolpanca * diasPorSemana * (dia / diasPorSemana),
            rendimentoSelic: this.rendimentoDiarioSelic * diasPorSemana * (dia / diasPorSemana),
            valorAcumulado: valorTotal,
            valorAcumuladoPolpanca: valorTotalPolpanca,
            valorAcumuladoSelic: valorTotalSelic
          });
          this.valor02 = valorTotal;
          this.valorPoupanca = valorTotalPolpanca;
          this.valorSelic = valorTotalSelic;
          ultimoDiaMes = dia; // Atualiza o último dia do mês
        }
      }
  
      // Ajusta o valor acumulado para o último dia do mês
      if (this.periodoSelecionado === 'ano' && ultimoDiaMes % 30 !== 0) {
        let mes = Math.floor(ultimoDiaMes / 30);
        this.tabelaRendimento[this.tabelaRendimento.length - 1].mes = mes;
      }
  
      this.rendimentoSemanal = this.rendimentoDiario * diasPorSemana;
      this.rendimentoMensal = this.rendimentoSemanal * (diasPeriodo / diasPorSemana);
    }
    this.mostrarGrafico = true;
  }

  numeroDiasPeriodo(): number {
    switch (this.periodoSelecionado) {
      case 'semana':
        return 7;
      case 'mes':
        return 30;
      case 'ano':
        return 360;
      default:
        return 0;
    }
  }

  formatarValor(valor: number): string {
    return valor.toLocaleString('en-US', this.formatoMoeda);
  }

  formatarPorcentagem(valor: number): string {
    const formatoPorcentagem = {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
  
    const valorPorcentagem = valor / 100; // Converter para a forma decimal
  
    return new Intl.NumberFormat('pt-BR', formatoPorcentagem).format(valorPorcentagem);
  }

  obterNomeMes(mes: number): string {
    return mes.toString();
  }

  atualizarPeriodo(): void {
    this.calcularRendimento();
  }

  calcularRendimentoSelic(valorInicial:number) {
    const taxaSelic = 0.05; // Taxa de rendimento anual da SELIC (exemplo: 10%)
    const taxaDiaria = taxaSelic / 30; // Taxa de rendimento diário
    const valorFinal = valorInicial * Math.pow(1 + taxaDiaria, 30);
    console.log(valorFinal)
    return valorFinal;
  }
  
  calcularRendimentoPoupanca(valorInicial:number) {
    const taxaPoupanca = 6.17; // Taxa de rendimento anual da poupança (exemplo: 6%)
    const taxaDiaria = taxaPoupanca / 365; // Taxa de rendimento diário
    const valorFinal = valorInicial * Math.pow(1 + taxaDiaria, 365);
    
    return valorFinal;
  }
}
