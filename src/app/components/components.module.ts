import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPainelComponent } from './navbar-painel/navbar-painel.component';
import { SidebarPainelComponent } from './sidebar-painel/sidebar-painel.component';
import { HomeIAComponent } from 'src/app/pages/painel IA/home-ia.component';
import { ModalIAComponent } from './modal-ia/modal-ia.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
  declarations: [

    NavbarPainelComponent,
    SidebarPainelComponent,
    ModalIAComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarModule,
    FooterModule
  ]
})
export class ComponentsModule { }
