import { Component } from '@angular/core';
import { ModalIAComponent } from 'src/app/components/modal-ia/modal-ia.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-home-ia',
  templateUrl: './home-ia.component.html',
  styleUrls: ['./home-ia.component.css']
})
export class HomeIAComponent {

  modal: boolean = false;

  constructor(public dialog: MatDialog) { }

  openModal(): boolean {
    return this.modal = false;
  }

  closeModal(): boolean {
    return this.modal = false;
  }

}
