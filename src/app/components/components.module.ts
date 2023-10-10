import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPainelComponent } from './navbar-painel/navbar-painel.component';
import { SidebarPainelComponent } from './sidebar-painel/sidebar-painel.component';
import { ModalIAComponent } from './modal-ia/modal-ia.component';




@NgModule({
  declarations: [


    NavbarPainelComponent,
    SidebarPainelComponent,
    ModalIAComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
