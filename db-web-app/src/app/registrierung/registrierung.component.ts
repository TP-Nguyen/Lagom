import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../service/main.service'; 
import { Nutzer } from '../model/nutzer'; 
import { Observable, from } from 'rxjs';
import { FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css']
})

export class RegistrierungComponent implements OnInit{

   //nutzerListe = Nutzer[]; 
   nutzerListe: Observable<Nutzer[]>;
   neuerNutzer; 
 
  constructor(private mainService: MainService, private formBuilder: FormBuilder) {
    this.neuerNutzer = this.formBuilder.group({
      Nutzername: '', 
      GanzerName: '', 
      Email: '', 
      Passwort: ''
    }); 
  }

  title = 'db-web-app';

  registrierungTitel = "REGISTRIERUNG"

  registrierungElemente = [
      {
        input: "Nutzername", value: "nutzername"
      },
      {
        input: "Ganzer Name", value: "ganzerName"
      }, 
      {
        input: "Email", value: "email"
      }, 
      {
        input: "Passwort", value: "passwort"
      }
  ];

  ngOnInit(): void {
  }

  submit(nutzerdaten){
    const newNutzer = new Nutzer(nutzerdaten.Nutzername, nutzerdaten.GanzerName, nutzerdaten.Email, nutzerdaten.Passwort); 
    this.neuerNutzer.reset(); 
    console.log("newNutzer.Nutzername")
    console.log(newNutzer.Nutzername)

    console.log('Your data has been submitted', nutzerdaten); 

    this.mainService.addNutzer(newNutzer).subscribe(data => {console.log(data); 
    }); 
  }

}
