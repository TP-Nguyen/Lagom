import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EintragComponent } from './eintrag/eintrag.component';
import { MainComponent } from './main/main.component'; 
import { LoginComponent } from './login/login.component'; 
import { RegistrierungComponent } from './registrierung/registrierung.component'; 


const routes: Routes = [

  // { path: '', component: AppComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', component: MainComponent},
  { path: 'eintrag', component: EintragComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registrierung', component: RegistrierungComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
