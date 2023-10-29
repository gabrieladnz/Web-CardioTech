import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar-painel',
  templateUrl: './navbar-painel.component.html',
  styleUrls: ['./navbar-painel.component.css']
})
export class NavbarPainelComponent {
  modal: boolean = false;

  openModal(){
    console.log('clicado')
    this.modal = !this.modal;
  }
}
