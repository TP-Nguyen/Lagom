import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component'; 
import { LoginComponent } from './login/login.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { EintragBearbeitenComponent } from "./eintragBearbeiten/eintragBearbeiten.component";
import { EintragErstellenComponent } from './eintragErstellen/eintragErstellen.component';
// import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainService } from './service/main.service';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'eintragErstellen', component: EintragErstellenComponent},
  { path: 'eintragBearbeiten', component: EintragBearbeitenComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registierung', component: RegistrierungComponent},
];

@NgModule({
  declarations: [
    AppComponent, 
    MainComponent,
    EintragErstellenComponent,
    LoginComponent,
    RegistrierungComponent,
    EintragBearbeitenComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // CalendarModule,
    BrowserAnimationsModule
  ],

  providers: [MainService], //[AuthService]
  bootstrap: [AppComponent]
})
export class AppModule { }
