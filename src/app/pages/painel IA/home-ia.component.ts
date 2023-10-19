import { Component } from '@angular/core';
import { ModalIAComponent } from 'src/app/components/modal-ia/modal-ia.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-ia',
  templateUrl: './home-ia.component.html',
  styleUrls: ['./home-ia.component.css']
})
export class HomeIAComponent {
  constructor(public dialog: MatDialog) { }

  openModal(): void {
    console.log("teste modal")
    const dialogRef = this.dialog.open(ModalIAComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
