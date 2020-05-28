import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eintrag',
  templateUrl: './eintrag.component.html',
  styleUrls: ['./eintrag.component.css']
})
export class EintragComponent {
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
