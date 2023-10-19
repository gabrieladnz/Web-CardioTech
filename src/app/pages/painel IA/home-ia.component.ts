import { Component } from '@angular/core';
import { ModalIAComponent } from 'src/app/components/modal-ia/modal-ia.component';

@Component({
  selector: 'app-home-ia',
  templateUrl: './home-ia.component.html',
  styleUrls: ['./home-ia.component.css']
})
export class HomeIAComponent {

  modal: boolean = false;

  constructor() { }

  openModal(): boolean {
    return this.modal = true;
  }

  closeModal(): boolean {
    return this.modal = false;
  }

}
