
















import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RegistrierungComponent {
  title = 'db-web-app';

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

}
