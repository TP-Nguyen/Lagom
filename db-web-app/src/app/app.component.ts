














import { Component, OnInit } from '@angular/core';

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

}
