import { MainService } from '../service/main.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Eintrag } from '../model/eintrag';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-eintragBearbeiten',
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

    // var x = NotizInput.value;
    // console.log(x);

  @Input() eintraege: Eintrag;
  // eintraege: Observable<Eintrag[]>;

  ngOnInit(): void {
    const EintragID = +this.route.snapshot.paramMap.get('EintragID');
    console.log(EintragID);
    this.mainService.getEintrag(EintragID).subscribe(res => this.eintraege = res);
    console.log(this.eintraege);
  }



  aktualisiereEintrag(): void {
    // console.log(this.eintraege.EintragID);
    // var bearbeiteneseintrag = this.eintraege.map(function(eintrag){
    //   return this.eintraege[0];
    // })
        // var eintraege.Datum: String;
    this.mainService.updateEintrag(this.eintraege).subscribe();
    // this.mainService.updateEintrag(this.eintraege).subscribe();
  }
  // public bearbeiteTagebuch(tagebuchEintrag: Eintrag): void{
  //   // this.mainService.getTagebuchEintrag(tagebuchEintrag).subscribe(); 
  // }
  
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

} 


