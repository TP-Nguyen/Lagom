import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../service/main.service'; 
import { Nutzer } from '../model/nutzer'; 
import { Observable, from } from 'rxjs';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})

export class RegistrierungComponent implements OnInit{

   //nutzerListe = Nutzer[]; 
   nutzerListe: Observable<Nutzer[]>;
   neuerNutzer; 
   workspaceID;
 
  constructor(private mainService: MainService, 
              private router: Router,
              private formBuilder: FormBuilder) {
    this.neuerNutzer = this.formBuilder.group({
      Nutzername: '', 
      GanzerName: '', 
      Email: '', 
      Passwort: ''
    }); 
  }

  title = 'db-web-app';

  registrierungTitel = "REGISTRIERUNG"

  ngOnInit(): void {
  }

  submit(nutzerdaten) {
    const newNutzer = new Nutzer(nutzerdaten.Nutzername, nutzerdaten.GanzerName, nutzerdaten.Email, nutzerdaten.Passwort); 
    this.neuerNutzer.reset(); 
    // console.log("newNutzer.Nutzername");
    // console.log(newNutzer.Nutzername);
    if(nutzerdaten.Nutzername != null || nutzerdaten.GanzerName != null || nutzerdaten.Email != null || nutzerdaten.Passwort != null ){
      console.log('Your data has been submitted', nutzerdaten); 
      this.mainService.addNutzer(newNutzer).subscribe(data => {console.log(data); });
      
      // this.workspaceID = this.mainService.getWorkspaceID(data[0].NutzerID);
      // this.workspaceID.subscribe(data => {console.log(data);
      //   this.router.navigate(['/main/' + data[0].WorkspaceID ]);}); 
    }
  }
}