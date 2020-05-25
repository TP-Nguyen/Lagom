import { MainService } from '../service/main.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import{Eintrag} from '../model/eintrag';

@Component({
  // selector: 'app-main', //Hier richtig?
  selector: 'app-root', 
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService) { }

  eintraege: Observable<Eintrag[]>;

  ngOnInit(): void {
    this.eintraege = this.mainService.getEintraege();

    this.eintraege.subscribe(data => {
      console.log(data);});


    console.log("Test, this.eintraege");
    console.log(this.eintraege);
  }

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