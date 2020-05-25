import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
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
