// import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
// import { Ziel } from "./Ziel.1";
import { Component, OnInit, Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import{Eintrag} from './eintrag';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  title = 'db-web-app';
  month = "";
  days = [
    {
      number: "1"
    },
    {
      number: "2"
    }
  ];

  constructor(private MainService: MainService) { }

  Eintraege: Observable<Eintrag[]>;

  getEintrag(): void {
    this.Eintraege = this.MainService.getEintrag();

    this.Eintraege.subscribe(data => {});
    console.log("Eintrag");
    }

}