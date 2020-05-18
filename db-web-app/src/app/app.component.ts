














import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'db-web-app';

  loginTitel = "LOGIN"

  loginElemente = [
    {
      input: "Nutzername" 
    }, 
    {
      input: "Passwort"
    }
];


registrierungTitel = "REGISTRIERUNG"

registrierungElemente = [
    {
      input: "Nutzername"
    },
    {
      input: "Ganzer Name"
    }, 
    {
      input: "Email"
    }, 
    {
      input: "Passwort"
    }
];


//thenLogin: TemplateRef<any>|null =  null;
//login: boolean = true;  

//thenRegistrieren: TemplateRef<any>|null = null;

}
