import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pagamento-boletos',
  templateUrl: './pagamento-boletos.component.html',
  styleUrls: ['./pagamento-boletos.component.css']
})
export class PagamentoBoletosComponent {
  constructor(public dialogRef: MatDialogRef<PagamentoBoletosComponent>,){
  }

  user = {
    nomeCompleto: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    plano: '',
    cep: '',
    estado: '',
    codigo: '',
  };
  planos = [
    'BASIC - U$: 100,00',
    'START - U$: 250,00',
    'PREMIUM - U$: 500,00',
    'PLATINUM - U$: 1.000,00',
  ];

  registerUser() {
    // Aqui você pode fazer a lógica para enviar os dados do usuário para o banco de dados
    console.log('Dados do usuário:', this.user);
    // Implemente a lógica de envio para o banco de dados aqui
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close(): void{
    this.dialogRef.close();
  }
}
