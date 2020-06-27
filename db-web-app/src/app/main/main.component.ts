import { MainService } from '../service/main.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable, from, BehaviorSubject, interval, combineLatest, merge } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Eintrag} from '../model/eintrag';
import { Ziel} from '../model/ziel';
import { Todo} from '../model/todo';
import { Erinnerung} from '../model/erinnerung';
import { Galerie } from '../model/galerie';
import { Motivation } from '../model/motivation';
import { Nutzer } from '../model/nutzer';
import { Tagebuch } from '../model/tagebuch';
import { Kalender } from '../model/kalender';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap, startWith, filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { NgModel } from '@angular/forms';

@Component({
  // selector: 'app-main', //Hier richtig?
  selector: 'app-root', 
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService,
    private router: Router,
    private readonly http: HttpClient,
    private route: ActivatedRoute) { }

  ziele: Observable<Ziel[]>;
  todos: Observable<Todo[]>;
  erinnerungen: Observable<Erinnerung[]>;
  galerien: Observable<Galerie[]>;
  motivationen: Observable<Motivation[]>;
  nutzer: Observable<Nutzer[]>;
  tagebuch: Observable<Tagebuch[]>;
  kalender: Observable<Kalender[]>;
  nutzerdaten:Observable<any>;
  WorkspaceID = +this.route.snapshot.paramMap.get('WorkspaceID');

  ngOnInit() {
    this.getAllData();
  }
  
  
  private getAllData(): void{
    console.log("getDATA");
    this.nutzerdaten = this.mainService.getNutzerdaten(this.WorkspaceID);
    this.nutzerdaten.subscribe(data => {console.log(data)});

    this.todos = this.mainService.getTodos(this.WorkspaceID);
    this.todos.subscribe(data => {});

    this.ziele = this.mainService.getZiele(this.WorkspaceID);
    this.ziele.subscribe(data => {});

    this.erinnerungen = this.mainService.getErinnerungen(this.WorkspaceID);
    this.erinnerungen.subscribe(data => {});

    this.galerien = this.mainService.getGalerien(this.WorkspaceID);
    this.galerien.subscribe(data => {});

    this.motivationen = this.mainService.getMotivationen(this.WorkspaceID);
    this.motivationen.subscribe(data => {});

    // this.nutzer = this.mainService.getNutzerListe();
    // this.nutzer.subscribe(data => {});

    this.tagebuch = this.mainService.getTagebuch(this.WorkspaceID);
    this.tagebuch.subscribe(data => {});

    this.kalender = this.mainService.getKalender(this.WorkspaceID);
    this.kalender.subscribe(data => {});
  }
  public deleteZiel(zielEintrag: Eintrag): void{
    this.mainService.deleteZielEintrag(zielEintrag).subscribe(); 
    this.ziele = this.mainService.getZiele(this.WorkspaceID);
    this.ziele.subscribe(data => {});
  }

  public deleteKalender(kalenderEintrag: Eintrag): void{
    this.mainService.deleteKalenderEintrag(kalenderEintrag).subscribe(); 
    this.kalender = this.mainService.getKalender(this.WorkspaceID);
    this.kalender.subscribe(data => {});
  }

  public deleteTagebuch(tagebuchEintrag: Eintrag): void{
    this.mainService.deleteTagebuchEintrag(tagebuchEintrag).subscribe(); 
    this.tagebuch = this.mainService.getTagebuch(this.WorkspaceID);
    this.tagebuch.subscribe(data => {});
  }
  
  public deleteToDo(todoEintrag: Eintrag): void{
    this.mainService.deleteToDoEintrag(todoEintrag).subscribe();
    this.todos = this.mainService.getTodos(this.WorkspaceID);
    this.todos.subscribe(data => {});
  }

  public deleteErinnerung(erinnerungEintrag: Eintrag): void{
    this.mainService.deleteErinnerungEintrag(erinnerungEintrag).subscribe(); 
    this.erinnerungen = this.mainService.getErinnerungen(this.WorkspaceID);
    this.erinnerungen.subscribe(data => {});
  }

  public eintragErstellen(){
    this.router.navigate(["eintragErstellen/" + this.WorkspaceID])
  }

  title = 'db-web-app';
  month = "Juli";
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