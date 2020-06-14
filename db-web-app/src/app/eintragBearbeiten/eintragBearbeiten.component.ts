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
    private route: ActivatedRoute) { 
    }
  @Input() eintraege: Eintrag;
  // eintraege: Observable<Eintrag[]>;

  ngOnInit(): void {
    this.getEintrag();
  }

  getEintrag(): void {
    const EintragID = +this.route.snapshot.paramMap.get('EintragID');
    console.log(EintragID);
    this.mainService.getEintrag(EintragID).subscribe(eintraege => this.eintraege = eintraege);
  }

  aktualisiereEintrag(): void {
    // console.log(this.eintraege.Datum);
    this.mainService.updateEintrag(this.eintraege).subscribe();
  }
  // public bearbeiteTagebuch(tagebuchEintrag: Eintrag): void{
  //   // this.mainService.getTagebuchEintrag(tagebuchEintrag).subscribe(); 
  // }
} 


