import { MainService } from '../service/main.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Eintrag } from '../model/eintrag';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-eintrag',
  templateUrl: './eintragBearbeiten.component.html',
  styleUrls: ['./eintragBearbeiten.component.css']
})
export class EintragBearbeitenComponent implements OnInit {
  bearbeitenEintrag;

  constructor(private mainService: MainService, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { 
      // this.bearbeitenEintrag = this.formBuilder.group({
      //   Datum=eintraege.Datum,
      //   Uhrzeit=eintraege.Datum,
      //   Titel=eintraege.Datum,
      //   Untertitel=eintraege.Datum,
      //   Text=eintraege.Datum,
      //   Notiz=eintraege.Datum,
      //   Anmerkung=eintraege.Datum
      // }); 
    }
  @Input() eintraege: Eintrag;
  ngOnInit(): void {
    const EintragID = +this.route.snapshot.paramMap.get('EintragID');
    console.log(EintragID);
    this.mainService.getEintrag(EintragID).subscribe(res => this.eintraege = res);
    console.log(this.eintraege);
  }

  // submit(bearbeitenEintrag){
  //   const updateEintrag = new Eintrag(bearbeitenEintrag.Datum, 
  //                                     bearbeitenEintrag.Uhrzeit,
  //                                     bearbeitenEintrag.Titel, 
  //                                     bearbeitenEintrag.Untertitel, 
  //                                     bearbeitenEintrag.Text, 
  //                                     bearbeitenEintrag.Notiz, 
  //                                     bearbeitenEintrag.Anmerkung); 
  //   console.log("newNutzer.Nutzername")
  //   console.log(updateEintrag.EintragID)
    
  //   console.log('Your data has been submitted', updateEintrag); 

  //   this.mainService.updateEintrag(updateEintrag).subscribe(); 
  // }

  aktualisiereEintrag(): void {
    this.mainService.updateEintrag(this.eintraege).subscribe();
    console.log("UPDATE EINTRAG")
    console.log(this.eintraege);
  }
  // public bearbeiteTagebuch(tagebuchEintrag: Eintrag): void{
  //   // this.mainService.getTagebuchEintrag(tagebuchEintrag).subscribe(); 
  // }
  
} 


