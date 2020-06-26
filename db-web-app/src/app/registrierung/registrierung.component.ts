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
 
  nachricht = " "; 

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
    if(nutzerdaten.Nutzername != "" && nutzerdaten.GanzerName != "" && nutzerdaten.Email != "" && nutzerdaten.Passwort != "" ){
      if(nutzerdaten.Nutzername != null && nutzerdaten.GanzerName != null && nutzerdaten.Email != null && nutzerdaten.Passwort != null ){
        this.mainService.addNutzer(newNutzer).subscribe(data => {});   
        console.log('Your data has been submitted', nutzerdaten); 
        this.router.navigate(['/login/']); 
     
      }else{
        console.log("Daten null"); 
        this.showError(); 
      }
    }else{
      console.log("Daten leer");
      this.showError(); 
    }
  }

  showError() {
    this.nachricht = "Alle Felder müssen ausgefüllt werden!";
    console.warn('Alle Felder müssen ausgefüllt werden!')
  }

}