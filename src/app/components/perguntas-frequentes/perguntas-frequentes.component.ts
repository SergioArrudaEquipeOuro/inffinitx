
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-perguntas-frequentes',
  templateUrl: './perguntas-frequentes.component.html',
  styleUrls: ['./perguntas-frequentes.component.css']
})
export class PerguntasFrequentesComponent implements AfterViewInit {
  @ViewChild('contentRef', { static: true }) contentRef!: ElementRef;

  
 
  perguntas: any[] = [
    { title:'O que é a negociação forex (forex trading)?',texto: 'Também conhecida por negociação de moedas, negociação de divisas, negociação cambial ou operação cambial, a negociação forex refere-se à compra de uma determinada moeda enquanto se vende outra em troca. A negociação forex envolve sempre a troca de uma moeda por outra.', cuboClass: 'close' },
    { title:'Como funciona a negociação forex?',texto: 'Como a negociação forex é realizada com pares de moedas (ou seja: a cotação do valor relativo de uma unidade monetária contra outra unidade monetária), em que a primeira moeda é a chamada moeda base, enquanto a segunda moeda é chamada moeda cotada (moeda de cotação).', cuboClass: 'close' },
    { title:'O que são os pares exóticos no mercado de câmbio?',texto: 'Em negociação forex, pares exóticos ou apenas exóticos referem-se a pares de moedas que incluem uma moeda principal a par com uma moeda de uma economia menor ou emergente. Os pares exóticos tendem a não serem negociados tão frequentemente, em comparação com os principais. São, normalmente, mais voláteis e com menos liquidez.', cuboClass: 'close' },
    { title:'O que é importante na negociação de forex?',texto: 'No mercado de câmbio, quando nos referimos à execução, queremos dizer a velocidade a que um operador de câmbio pode realmente comprar ou vender o que vê no ecrã, ou a cotação de compra / venda que recebe por telefone. Um bom preço não faz sentido quando o seu banco ou corretora não pode executar o seu pedido rápido o suficiente para obter esse preço de compra ou venda.', cuboClass: 'close' },
    { title:'O que influencia os preços na negociação forex?',texto: 'Há um número ilimitado de fatores que contribuem e influenciam diariamente os preços na negociação forex (ou seja: as taxas de câmbio), mas pode-se dizer que há seis fatores principais que contribuem mais e são mais ou menos as principais forças motrizes da flutuação dos preços na negociação forex: Diferenciais na inflação, Diferenciais nas taxas de juro, Défices de conta corrente, Dívida pública, Termos de negociação, Estabilidade política e económica.', cuboClass: 'close' },

   
  ];


  ngAfterViewInit() {
    this.perguntas.forEach(pergunta => {
      if (pergunta.contentRef && pergunta.contentRef.nativeElement) {
        pergunta.contentRef.nativeElement.style.maxHeight = '0';
      }
    });
  }

  expandir(pergunta: any) {
    if (pergunta.cuboClass === 'close') {
      pergunta.cuboClass = 'open';
      if (pergunta.contentRef && pergunta.contentRef.nativeElement) {
        pergunta.contentRef.nativeElement.style.maxHeight = pergunta.contentRef.nativeElement.scrollHeight + 'px';
      }
    } else {
      pergunta.cuboClass = 'close';
      if (pergunta.contentRef && pergunta.contentRef.nativeElement) {
        pergunta.contentRef.nativeElement.style.maxHeight = '0';
      }
    }
  }
}
