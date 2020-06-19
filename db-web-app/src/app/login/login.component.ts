import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../service/main.service'; 
import { Observable, from } from 'rxjs';
import { FormBuilder } from '@angular/forms'
import { Nutzer } from '../model/nutzer'; 
import { Router } from '@angular/router';

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
  nutzerGefunden: Observable<Nutzer[]>;
  // nutzerGefunden;//: Nutzer;
  obj;
  workspaceID

  constructor(private mainService: MainService, 
              private formBuilder: FormBuilder, 
              private router: Router) {
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
    console.log("login: " + nutzerLogin.Nutzername )
    if(nutzerdaten.Nutzername != null && nutzerdaten.Passwort != null ){
      this.nutzerGefunden=this.mainService.loginNutzer(nutzerLogin);
      this.nutzerGefunden.subscribe(data => {
        // console.log(data);
        this.obj = data[0];
        if(this.obj =="404"){
          console.log(this.obj);
          console.log("fail");          
        }else{
          console.log(data[0].NutzerID);
          console.log("erfolgreich");
          this.workspaceID = this.mainService.getWorkspaceID(data[0].NutzerID);
          this.workspaceID.subscribe(data => {console.log(data);
            this.router.navigate(['/main/' + data[0].WorkspaceID ]);});
        }
      }); 
    }else{
      console.log("Daten unvollständig")
    }
  }
}
