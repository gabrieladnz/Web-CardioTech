import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PagesComponent } from './pages.component';
import { HomeComponent } from './cardiotech/home.component';
import { LoginComponent } from './login/login.component';
import { HomeIAComponent } from './painel IA/home-ia.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { SidebarPainelModule } from '../components/sidebar-painel/sidebar-painel.module';
import { NavbarPainelModule } from '../components/navbar-painel/navbar-painel.module';
import { PageRoutingModule } from './pages-routing-module';

// import { NavbarPainelComponent } from '../components/navbar-painel/navbar-painel.component';
// import { SidebarPainelComponent } from '../components/sidebar-painel/sidebar-painel.component'
import { NavbarModule } from '../components/navbar/navbar.module';
import { FooterModule } from '../components/footer/footer.module';

// Angular Material
import { NgFor } from '@angular/common';
import { PainelCentralComponent } from './painel-central/painel-central.component';
import { ProntuariosComponent } from './prontuarios/prontuarios.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    HomeIAComponent,
    PasswordRecoverComponent,
    PainelCentralComponent,
    ProntuariosComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    FooterModule,
    SidebarPainelModule,
    NavbarPainelModule
  ],
})
export class PagesModule { }
