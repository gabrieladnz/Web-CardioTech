import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-painel',
  templateUrl: './sidebar-painel.component.html',
  styleUrls: ['./sidebar-painel.component.css'],
})
export class SidebarPainelComponent {

  mostrarSide: boolean = true;
  activeButton: number = 0;
  menuFechado: boolean = false;

  isButtonClicked: boolean = false;

  diminuirSide() {
    this.mostrarSide = !this.mostrarSide

  }

  onButtonClick(buttonNumber: number): void {
    this.activeButton = buttonNumber;
  }

  fecharMenu() {
    this.menuFechado = !this.menuFechado;
  }
}
