import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eintrag } from '../model/eintrag';
import { Location } from '@angular/common';
import { MainService} from '../service/main.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';

import { Tagebuch } from '../model/tagebuch';
 
@Component({
  selector: 'app-eintragBearbeiten',
  templateUrl: './eintragBearbeiten.component.html',
  styleUrls: ['./eintragBearbeiten.component.css']
})
export class EintragBearbeitenComponent implements OnInit {
  // eintrag: Observable<Tagebuch>;
  // eintrag: Observable<Eintrag>;
  @Input() eintrag: Eintrag;

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit():void {
    this.getEintrag();
    // console.log(this.eintrag);
    this.test();

    // const EintragID = +this.route.snapshot.paramMap.get('EintragID');
    // console.log(EintragID);
    // // this.eintrag = this.mainService.getEintrag(EintragID);
    // // this.eintrag.subscribe(data => {});
    
    // this.mainService.getEintrag(EintragID).subscribe(eintrag => this.eintrag = eintrag);
  } 

  public getEintrag(){
    const EintragID = +this.route.snapshot.paramMap.get('EintragID');
    console.log(EintragID);
    this.mainService.getEintrag(EintragID).subscribe(eintrag => this.eintrag = eintrag);
    
  }

  public test(){
    console.log(this.eintrag);
  }
  
}