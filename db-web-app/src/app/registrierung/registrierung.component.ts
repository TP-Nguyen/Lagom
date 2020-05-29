import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ziel } from '../model/ziel';
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
    //this.getNutzerListe();
  }

  // getNutzerListe(): void {
  //   this.mainService.getNutzerListe().subscribe(nutzerListe => this.nutzerListe = nutzerListe); 
  // }

  // add(nutzer: Nutzer): void {

  //   //this.heroService.addHero({ name } as Hero).subscribe(hero => this.heroes.push(hero);
  //   //this.nutzer = this.mainService.addNutzer(this.nutzer);
  //   this.mainService.addNutzer(nutzer).subscribe(nutzer => {this.nutzerListe.push(nutzer);
  //   });
  // }

  // getHeroes(): void {
  //   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  // }

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
