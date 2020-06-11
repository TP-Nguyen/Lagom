import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eintragErstellen',
  templateUrl: './eintragErstellen.component.html',
  styleUrls: ['./eintragErstellen.component.css']
})
export class EintragErstellenComponent {
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

}
