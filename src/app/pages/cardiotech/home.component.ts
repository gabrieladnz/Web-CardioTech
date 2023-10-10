import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isScroll: boolean = false;
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  scrollWindow(){
    // console.log(window.pageYOffset)

    if(window.pageYOffset >= 1300){
      this.isScroll = true
    } else {
      this.isScroll = false
    }
  }

  scrollTop(){
    document.body.scrollIntoView({ behavior: 'smooth' })
  }

  ngOnInit(){
    const sr = ScrollReveal();

    sr.reveal('.fade-up', {
      origin: 'bottom',   
      distance: '20px',   
      duration: 1000,     
      delay: 200,         
      easing: 'ease-in',  
    });


    sr.reveal('.fade-down', {
      origin: 'top',     
      distance: '20px',  
      duration: 1000,    
      delay: 100,        
      easing: 'ease-in', 
    });


    sr.reveal('.pulse-section', {duration: 2000})
    sr.reveal('.newslatter-section', {duration: 2000})
  }

}
