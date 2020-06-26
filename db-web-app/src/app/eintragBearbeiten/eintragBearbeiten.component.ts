import { MainService } from '../service/main.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Eintrag } from '../model/eintrag';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-eintragBearbeiten',
  templateUrl: './eintragBearbeiten.component.html',
  styleUrls: ['./eintragBearbeiten.component.css']
})
export class EintragBearbeitenComponent implements OnInit {
  bearbeitenEintrag;
  WorkspaceID = +this.route.snapshot.paramMap.get('WorkspaceID');

  constructor(private mainService: MainService, 
              private router: Router,
              private location: Location,
              private route: ActivatedRoute) { }
  @Input() eintraege: Eintrag;
  // eintraege: Observable<Eintrag[]>;

  ngOnInit(): void {
    this.getEintrag();
  }

  Art = this.route.snapshot.url[1].path;

  getEintrag(): void {
    const EintragID = +this.route.snapshot.paramMap.get('EintragID');
    console.log(EintragID);
    
    this.mainService.getEintrag(EintragID, this.Art).subscribe(eintraege => this.eintraege = eintraege);
  }

  goBack(){
    // this.router.navigate(['/main/' + this.WorkspaceID]);
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
      }
    }else{
      console.log("Daten leer")
    }  
  }
} 


