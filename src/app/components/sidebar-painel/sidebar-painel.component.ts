import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-painel',
  templateUrl: './sidebar-painel.component.html',
  styleUrls: ['./sidebar-painel.component.css'],
})
export class SidebarPainelComponent {

  mostrarSide: boolean = true;

  diminuirSide(){
    this.mostrarSide = !this.mostrarSide

  }

}

