import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './cardiotech/home.component';
import { LoginComponent } from './login/login.component';
import { HomeIAComponent } from './painel/home-ia.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { PageRoutingModule } from './pages-routing-module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { FooterModule } from "../components/footer/footer.module";



@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        HomeIAComponent,
        PasswordRecoverComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        NavbarModule,
        FooterModule
    ]
})
export class PagesModule { }
