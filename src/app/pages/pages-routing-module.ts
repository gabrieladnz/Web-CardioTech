import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { HomeComponent } from './cardiotech/home.component';
import { LoginComponent } from './login/login.component';
import { HomeIAComponent } from './painel/home-ia.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'painel', component: HomeIAComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageRoutingModule { }

