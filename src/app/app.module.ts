import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './pages/login/login.module';
// import { AosModule } from 'ngx-aos';
import * as Aos from 'aos';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    // AosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  ngOnInit(){
   Aos.init();
  }
}
