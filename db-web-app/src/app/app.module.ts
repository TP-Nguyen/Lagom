import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { AuthService } from './services/auth.service';

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { EintragComponent } from './eintrag/eintrag.component';
import { MainComponent } from './main/main.component'; 
import { LoginComponent } from './login/login.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { EintragBearbeitenComponent } from "./eintragBearbeiten/eintragBearbeiten.component";

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'eintrag', component: EintragComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registierung', component: RegistrierungComponent},
];

@NgModule({
  declarations: [
    AppComponent, 
    MainComponent,
    EintragComponent,
    LoginComponent,
    RegistrierungComponent,
    EintragBearbeitenComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], //[AuthService]
  bootstrap: [AppComponent]
})
export class AppModule { }
