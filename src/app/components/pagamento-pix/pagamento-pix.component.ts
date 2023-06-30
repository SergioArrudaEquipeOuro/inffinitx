import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-pagamento-pix',
  templateUrl: './pagamento-pix.component.html',
  styleUrls: ['./pagamento-pix.component.css']
})
export class PagamentoPixComponent {
  constructor(public dialogRef: MatDialogRef<PagamentoPixComponent>,private clipboard: Clipboard){
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close(): void{
    this.dialogRef.close();
  }

  copy() {
    this.clipboard.copy('46.731.447/0001-31');
    alert('Copiado para a área de transferência!')
  }

}
