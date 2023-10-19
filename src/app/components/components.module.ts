import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPainelComponent } from './navbar-painel/navbar-painel.component';
import { SidebarPainelComponent } from './sidebar-painel/sidebar-painel.component';
import { ModalIAComponent } from './modal-ia/modal-ia.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [

    NavbarPainelComponent,
    SidebarPainelComponent,
    ModalIAComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    NgModule,
  ],
  exports: [
    NavbarModule,
    FooterModule
  ]
})
export class ComponentsModule { }
