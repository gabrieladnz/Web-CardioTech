import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-ia',
  templateUrl: './modal-ia.component.html',
  styleUrls: ['./modal-ia.component.css'],

})
export class ModalIAComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(public dialogRef: MatDialogRef<ModalIAComponent>) {

  }
}
