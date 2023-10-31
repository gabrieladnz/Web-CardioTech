import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { HomeComponent } from './cardiotech/home.component';
import { LoginComponent } from './login/login.component';
import { HomeIAComponent } from './painel IA/home-ia.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { PainelCentralComponent } from './painel-central/painel-central.component';
import { ProntuariosComponent } from './prontuarios/prontuarios.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'password-recover', component: PasswordRecoverComponent},
  {path: 'painel-central', component: PainelCentralComponent},
  {path: 'pulse', component: HomeIAComponent},
  {path: 'prontuarios', component: ProntuariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageRoutingModule { }

