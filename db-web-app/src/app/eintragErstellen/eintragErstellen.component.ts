import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eintrag } from '../model/eintrag';
import { Observable, from } from 'rxjs';
import { FormBuilder } from '@angular/forms'
import { MainService } from '../service/main.service'; 

@Component({
  selector: 'app-eintragErstellen',
  templateUrl: './eintragErstellen.component.html',
  styleUrls: ['./eintragErstellen.component.css']
})

export class EintragErstellenComponent implements OnInit{
  
  eintragListe: Observable<Eintrag[]>;
  neuerEintrag; 
  
  constructor(private mainService: MainService, private formBuilder: FormBuilder) {
    this.neuerEintrag = this.formBuilder.group({
      Datum: '', 
      Uhrzeit: '', 
      Titel: '', 
      Untertitel: '', 
      Text: '', 
      Notiz: '',
      Anmerkung: ''
    }); 
  }
  
  title = 'db-web-app';

  erstellungsTitel = "EINTRAG ERSTELLEN"

  ngOnInit(): void {
  }

  submit(eintragdaten){
    const newEintrag = new Eintrag(eintragdaten.Datum, eintragdaten.Uhrzeit, eintragdaten.Titel, eintragdaten.Untertitel, eintragdaten.Text, eintragdaten.Notiz, eintragdaten.Anmerkung); 
    this.neuerEintrag.reset(); 
    console.log("newEintrag.Titel")
    console.log(newEintrag.Titel)

    console.log('Your data has been submitted', eintragdaten); 

    this.mainService.addEintrag(newEintrag).subscribe(data => {console.log(data); 
    }); 
  }

}