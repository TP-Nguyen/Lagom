import { MainService } from '../service/main.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import{Eintrag} from '../model/eintrag';
import{Ziel} from '../model/ziel';
import{Todo} from '../model/todo';
import{Erinnerung} from '../model/erinnerung';
import { Galerie } from '../model/galerie';
import { Motivation } from '../model/motivation';
import { Nutzer } from '../model/nutzer';
import { Tagebuch } from '../model/tagebuch';
import { Kalender } from '../model/kalender';

@Component({
  // selector: 'app-main', //Hier richtig?
  selector: 'app-root', 
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ziele: Observable<Ziel[]>;
  todos: Observable<Todo[]>;
  erinnerungen: Observable<Erinnerung[]>;
  galerien: Observable<Galerie[]>;
  motivationen: Observable<Motivation[]>;
  nutzer: Observable<Nutzer[]>;
  tagebuch: Observable<Tagebuch[]>;
  kalender: Observable<Kalender[]>;

  //nutzer: Observable<Nutzer>; 
  nutzerListe: Observable<Nutzer[]>; 

  ngOnInit(): void {

    this.todos = this.mainService.getTodos();
    this.ziele = this.mainService.getZiele();
    this.erinnerungen = this.mainService.getErinnerungen();
    this.galerien = this.mainService.getGalerien();
    this.motivationen = this.mainService.getMotivationen();
    this.nutzer = this.mainService.getNutzer();
    this.tagebuch = this.mainService.getTagebuch();
    this.kalender = this.mainService.getKalender();

    //this.nutzer = this.mainService.addNutzer(this.nutzer);
    //this.mainService.addNutzer(newNutzer).subscribe(newNutzer => this.nutzer.push(newNutzer));

    this.todos.subscribe(data => {console.log(data);});
    console.log("Test, this.todos");
    console.log(this.todos);

    this.ziele.subscribe(data => {console.log(data);});
    console.log("Test, this.ziele");
    console.log(this.ziele);

    this.erinnerungen.subscribe(data => {console.log(data);});
    console.log("Test, this.erinnerungen");
    console.log(this.erinnerungen);

    this.galerien.subscribe(data => {console.log(data);});
    console.log("Test, this.galerien");
    console.log(this.galerien);

    this.motivationen.subscribe(data => {console.log(data);});
    console.log("Test, this.motivationen");
    console.log(this.motivationen);

    this.tagebuch.subscribe(data => {console.log(data);});
    console.log("Test, this.tagebuch");
    console.log(this.tagebuch);

    this.nutzer.subscribe(data => {console.log(data);});
    console.log("Test, this.nutzer");
    console.log(this.nutzer);

    this.kalender.subscribe(data => {console.log(data);});
    console.log("Test, this.kalender");
    console.log(this.kalender);
  }
  // public ziel$ :Ziel;
  // constructor{
  //   this.ziel$ = {
  //     EintragID  : 
  //     Datum : ziel.Datum,
  //     Titel : ziel.Titel,
  //     Untertitel : ziel.Untertitel,
  //     Text : ziel.Text,
  //     Notiz : ziel.Notiz,
  //     Anmerkung : ziel.Anmerkung
  //   }this.ziel$.id
  // }
  public deleteZiel(event?: any): void{
    console.log("iwas");
  }
  // public update

  title = 'db-web-app';
  month = "monat";
  days = [
    {
      number: "1"
    },
    {
      number: "2"
    },
    {
      number: "3"
    },
    {
      number: "4"
    },
    {
      number: "5"
    },
    {
      number: "6"
    },
    {
      number: "7"
    },
    {
      number: "8"
    },
    {
      number: "9"
    },
    {
      number: "10"
    },
    {
      number: "11"
    },
    {
      number: "12"
    },
    {
      number: "13"
    },
    {
      number: "14"
    },
    {
      number: "15"
    },
    {
      number: "16"
    },
    {
      number: "17"
    },
    {
      number: "18"
    },
    {
      number: "19"
    },
    {
      number: "20"
    },
    {
      number: "21"
    },
    {
      number: "22"
    },
    {
      number: "23"
    },
    {
      number: "24"
    },
    {
      number: "25"
    },
    {
      number: "26"
    },
    {
      number: "27"
    },
    {
      number: "28"
    },
    {
      number: "29"
    },
    {
      number: "30"
    },
    {
      number: "31"
    }
    
  ];

}