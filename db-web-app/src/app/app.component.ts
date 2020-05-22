import { Component, OnInit, TemplateRef } from '@angular/core';
// import { AppComponent } from './app.component';
// import { HttpClientModule }    from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 export class AppComponent {
  constructor(private http: HttpClient) { } 
  privateeventsUrl ="/";

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
  
  ngOnInit() {
  }
//thenLogin: TemplateRef<any>|null =  null;
//login: boolean = true;  

//thenRegistrieren: TemplateRef<any>|null = null;

}
