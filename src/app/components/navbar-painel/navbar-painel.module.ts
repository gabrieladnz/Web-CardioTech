import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarPainelComponent } from './navbar-painel.component';




@NgModule({
  declarations: [
    NavbarPainelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarPainelComponent
  ]
})
export class NavbarPainelModule { }




