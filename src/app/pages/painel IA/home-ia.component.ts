import { Component } from '@angular/core';
import { ModalIAComponent } from 'src/app/components/modal-ia/modal-ia.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-home-ia',
  templateUrl: './home-ia.component.html',
  styleUrls: ['./home-ia.component.css']
})
export class HomeIAComponent {
  constructor(public dialog: MatDialog) { }

  openModal() {
    console.log("Abrir modal")
    const config: MatDialogConfig = {
      // Configurações do modal (opcional)
      width: '400px',
    };

    this.dialog.open(ModalIAComponent, config);
  }
}
