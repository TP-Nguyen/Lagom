import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EintragErstellenComponent } from './eintragErstellen/eintragErstellen.component';
import { MainComponent } from './main/main.component'; 
import { LoginComponent } from './login/login.component'; 
import { RegistrierungComponent } from './registrierung/registrierung.component'; 
import { EintragBearbeitenComponent } from "./eintragBearbeiten/eintragBearbeiten.component";

const routes: Routes = [

  // { path: '', component: AppComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'main', component: MainComponent},
  { path: 'main/:NutzerID', component: MainComponent},
  { path: 'eintragErstellen', component: EintragErstellenComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registrierung', component: RegistrierungComponent},
  { path: 'eintragBearbeiten/:EintragID', component: EintragBearbeitenComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
