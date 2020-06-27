import { Component, OnInit, TemplateRef } from '@angular/core';
// import { AppComponent } from './app.component';
// import { HttpClientModule }    from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Nutzer} from '../app/model/nutzer'; 
import { MainService } from './service/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 export class AppComponent implements OnInit{
  
  constructor(private mainService: MainService) {}


  ngOnInit() {
    this.mainService.setupSocketConnection();
  }

}
