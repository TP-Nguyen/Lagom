import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
