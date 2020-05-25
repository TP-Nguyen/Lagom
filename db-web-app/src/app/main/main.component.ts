import { MainService } from '../service/main.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import{Eintrag} from '../model/eintrag';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private MainService: MainService) { }

  Eintraege: Observable<Eintrag[]>;

  ngOnInit(): void {
    console.log("Eintrag");
    this.Eintraege = this.MainService.getEintrag();

    this.Eintraege.subscribe(data => { 
      console.log(data);});
      console.log("Eintrag");
      console.log(this.Eintraege);

    }

  title = 'db-web-app';
  month = "monat";
  days = [
    {
      number: "1"
    },
    {
      number: "2"
    }
  ];

}