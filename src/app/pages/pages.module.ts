import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './cardiotech/home.component';
import { LoginComponent } from './login/login.component';
import { HomeIAComponent } from './painel IA/home-ia.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { PageRoutingModule } from './pages-routing-module';

import { NavbarPainelComponent } from '../components/navbar-painel/navbar-painel.component';
import { SidebarPainelComponent } from '../components/sidebar-painel/sidebar-painel.component';
import { ModalIAComponent } from '../components/modal-ia/modal-ia.component';
import { NavbarModule } from '../components/navbar/navbar.module';
import { FooterModule } from '../components/footer/footer.module';

// Angular Material 
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    HomeIAComponent,
    PasswordRecoverComponent,
    NavbarPainelComponent,
    SidebarPainelComponent,
    ModalIAComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    NavbarModule,
    FooterModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule, MatIconModule
  ],
})
export class PagesModule { }
