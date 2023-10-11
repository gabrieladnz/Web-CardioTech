import { Component } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showButton: boolean = false;

  @HostListener('window:resize', ['$event'])
  hiddenButton(){
    this.showButton = window.innerWidth < 768;
  }

}
