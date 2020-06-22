import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eintrag } from '../model/eintrag';
import { Observable, from } from 'rxjs';
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../service/main.service'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-eintragErstellen',
  templateUrl: './eintragErstellen.component.html',
  styleUrls: ['./eintragErstellen.component.css']
})

export class EintragErstellenComponent implements OnInit{
  
  eintragListe: Observable<Eintrag[]>;
  WorkspaceID = +this.route.snapshot.paramMap.get('WorkspaceID');
  neuerEintrag; 
  
  constructor(private mainService: MainService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder) {
    this.neuerEintrag = this.formBuilder.group({
      EintragArt: '',
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
  goBack(){
    this.location.back();
  }

  submit(eintragdaten){
    const newEintrag = new Eintrag(eintragdaten.Datum, eintragdaten.Uhrzeit, eintragdaten.Titel, eintragdaten.Untertitel, eintragdaten.Text, eintragdaten.Notiz, eintragdaten.Anmerkung); 
    this.neuerEintrag.reset(); 
  
    if(eintragdaten.EintragArt != "" && eintragdaten.Datum != "" && eintragdaten.Titel != ""){
      if(eintragdaten.EintragArt != null && eintragdaten.Datum != null && eintragdaten.Titel != null){
        console.log('Your data has been submitted', eintragdaten); 
        this.mainService.addEintrag(newEintrag, eintragdaten.EintragArt,this.WorkspaceID).subscribe(data => {console.log(data); 
        }); 
        this.goBack();
      }
      else{
        console.log("Daten null")
      }
    }else{
      console.log("Daten leer")
    }    
  }
}