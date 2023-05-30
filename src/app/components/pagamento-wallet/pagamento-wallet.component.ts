import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-pagamento-wallet',
  templateUrl: './pagamento-wallet.component.html',
  styleUrls: ['./pagamento-wallet.component.css']
})
export class PagamentoWalletComponent {

  constructor(public dialogRef: MatDialogRef<PagamentoWalletComponent>,private clipboard: Clipboard){
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close(): void{
    this.dialogRef.close();
  }
  copy() {
    this.clipboard.copy('TNfgsa4F8zMWhTnxs7x4hFmbhwd6t5a3jW');
    alert('Copiado para a área de transferência!')
  }

}
