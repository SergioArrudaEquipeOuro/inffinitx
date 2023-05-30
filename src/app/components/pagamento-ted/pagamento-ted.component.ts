import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pagamento-ted',
  templateUrl: './pagamento-ted.component.html',
  styleUrls: ['./pagamento-ted.component.css']
})
export class PagamentoTedComponent {

  constructor(public dialogRef: MatDialogRef<PagamentoTedComponent>,){
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close(): void{
    this.dialogRef.close();
  }


}
