import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../service/main.service'; 
import { Observable, from } from 'rxjs';
import { FormBuilder } from '@angular/forms'
import { Nutzer } from '../model/nutzer'; 
import { isNull } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'db-web-app';

  loginTitel = "LOGIN"

  nutzerLogin;
  // @Input() nutzerGefunden : Nutzer;  
  nutzerGefunden;
  data = null; 
  gefunden;

  constructor(private mainService: MainService, private formBuilder: FormBuilder) {
    this.nutzerLogin = this.formBuilder.group({
      Nutzername: '',
      Passwort: ''
    }); 
  }

  ngOnInit(): void {
  }

  submit(nutzerdaten) {
    const nutzerLogin = new Nutzer(nutzerdaten.Nutzername, nutzerdaten.GanzerName, nutzerdaten.Email, nutzerdaten.Passwort); 
    this.nutzerLogin.reset(); 
    console.log(nutzerLogin.Nutzername)

    // this.mainService.loginNutzer(nutzerLogin).subscribe(nutzerGefunden => {console.log(nutzerGefunden)}); 

    // ;
    this.nutzerGefunden = this.mainService.loginNutzer(nutzerLogin);
    this.gefunden = this.mainService.loginNutzer(nutzerLogin);
    this.nutzerGefunden.subscribe(data => {
      console.log("data:" + data)
      if (data != null){

        this.nutzerGefunden = this.gefunden;
        console.log("!null");
  
      }else{
        console.log("null");
      }
    }); 
    // this.nutzerGefunden.subscribe(nutzerGefunden => {console.log("data:" + nutzerGefunden)}); 
    

    //try1
    // this.mainService.loginNutzer(nutzerLogin).subscribe(data => this.data = data); 
    // console.log(this.data);
    // console.log("nutzerGefunden: " + this.nutzerGefunden);

    // if (data = null) {
    //   console.log("Falsche Nutzerdaten");
    // }
  }

}
