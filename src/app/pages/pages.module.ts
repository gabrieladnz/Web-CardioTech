import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './cardiotech/home.component';
import { LoginComponent } from './login/login.component';
import { HomeIAComponent } from './painel IA/home-ia.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { PageRoutingModule } from './pages-routing-module';

import { NavbarPainelComponent } from '../components/navbar-painel/navbar-painel.component';
import { SidebarPainelComponent } from '../components/sidebar-painel/sidebar-painel.component'
import { NavbarModule } from '../components/navbar/navbar.module';
import { FooterModule } from '../components/footer/footer.module';

// Angular Material
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { SidebarPainelModule } from '../components/sidebar-painel/sidebar-painel.module';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    HomeIAComponent,
    PasswordRecoverComponent,
    NavbarPainelComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    NavbarModule,
    FooterModule,
    SidebarPainelModule
  ],
})
export class PagesModule { }
