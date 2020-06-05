import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eintrag } from '../model/eintrag';
import { MainService} from '../service/main.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-eintrag',
  templateUrl: './eintragBearbeiten.component.html',
  styleUrls: ['./eintragBearbeiten.component.css']
})
export class EintragBearbeitenComponent implements OnInit {

  constructor(
    private mainService: MainService,
    private route: ActivatedRoute) { }

  ngOnInit():void {
    this.getEintrag();
  } 

  public getEintrag(): void {
    // const EintragID = typeof gesuchterEintrag === 'number' ? gesuchterEintrag : gesuchterEintrag.EintragID; 
    const id = +this.route.snapshot.paramMap.get('id');
    // const id = id
    this.mainService.getEintrag(id).subscribe;
  }

}
