import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component'; 
import { LoginComponent} from './login/login.component';
import { RegistrierungComponent} from './registrierung/registrierung.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registierung', component: RegistrierungComponent},
];

@NgModule({
  declarations: [
    AppComponent, 
    MainComponent,
    LoginComponent,
    RegistrierungComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
