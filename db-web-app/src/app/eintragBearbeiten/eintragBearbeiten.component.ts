import { MainService } from '../service/main.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Eintrag } from '../model/eintrag';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Kalender } from '../model/kalender';
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-eintragBearbeiten',
  templateUrl: './eintragBearbeiten.component.html',
  styleUrls: ['./eintragBearbeiten.component.css']
})
export class EintragBearbeitenComponent implements OnInit {
  bearbeitenEintrag;
  nachricht = " ";
  WorkspaceID = +this.route.snapshot.paramMap.get('WorkspaceID');

  constructor(private mainService: MainService, 
              private router: Router,
              private location: Location,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { 
    this.bearbeitenEintrag = this.formBuilder.group({
      Datum: '', 
      Titel: ''
    }); 
  }
  
  @Input() eintraege: Eintrag;
  Art = this.route.snapshot.url[1].path;
  EintragID;
  uhr=false;
  modelChangeDate(newDate){
    this.eintraege[0].Datum = newDate;
    console.log(this.eintraege[0].Datum);
  }
  
    ngOnInit(): void {
    this.EintragID = +this.route.snapshot.paramMap.get('EintragID');
    console.log(this.EintragID);
    this.getEintrag();
    if(this.Art == "Erinnerung" || this.Art == "Kalender"){
      this.uhr=true;
    }
  }

  getEintrag(): void {    
    this.mainService.getEintrag(this.EintragID, this.Art).subscribe(eintraege =>  {this.eintraege = eintraege,
      console.log(eintraege[0].Datum);
    }
      );
  }

  goBack(){
    this.location.back();
  }

  aktualisiereEintrag(): void {
    console.log(this.eintraege[0]); 

    if(this.eintraege[0].Datum != "" && this.eintraege[0].Titel != ""){
     if(this.eintraege[0].Datum != null && this.eintraege[0].Titel != null){
        this.eintraege.Art = this.Art;
        this.mainService.updateEintrag(this.eintraege).subscribe();
        this.goBack();
      }else{
        console.log("Daten null")
        this.showError(); 
      }
    }else{
      console.log("Daten leer")
      this.showError(); 
    }  
  }

  showError() {
    this.nachricht = "Datum oder Titel oder beides wurden nicht eingetragen!";
    console.warn('Datum oder Titel oder beides wurden nicht eingetragen!')
  }

} 


