import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eintrag } from '../model/eintrag';
import { MainService} from '../service/main.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
 
@Component({
  selector: 'app-eintrag',
  templateUrl: './eintragBearbeiten.component.html',
  styleUrls: ['./eintragBearbeiten.component.css']
})
export class EintragBearbeitenComponent implements OnInit {
  eintrag: Observable<Eintrag>;

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute) { }

  ngOnInit():void {
    // this.getEintrag();
    const EintragID = +this.route.snapshot.paramMap.get('EintragID');
    // const id = id
    console.log(EintragID);
    this.eintrag = this.mainService.getEintrag(EintragID);
    this.eintrag.subscribe(data => {});

      // eintrag => this.eintrag = eintrag)
    
    console.log(this.eintrag);
  } 
}
