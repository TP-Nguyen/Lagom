import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../service/main.service'; 
import { Observable, from } from 'rxjs';
import { FormBuilder } from '@angular/forms'
import { Nutzer } from '../model/nutzer'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'db-web-app';

  loginTitel = "LOGIN"

  nutzerLogin; 

  constructor(private mainService: MainService, private formBuilder: FormBuilder) {
    this.nutzerLogin = this.formBuilder.group({
      Nutzername: '',
      Passwort: ''
    }); 
  }

  ngOnInit(): void {
  }

  submit(nutzerdaten){
    const nutzerLogin = new Nutzer(nutzerdaten.Nutzername, nutzerdaten.GanzerName, nutzerdaten.Email, nutzerdaten.Passwort); 
    this.nutzerLogin.reset(); 
    console.log(nutzerLogin.Nutzername)

    this.mainService.loginNutzer(nutzerLogin).subscribe(data => {console.log(data); 
    }); 
  }

}
