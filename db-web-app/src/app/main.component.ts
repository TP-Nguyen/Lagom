import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'db-web-app';
  month = "";
  days = [
    {
      number: "1"
    },
    {
      number: "2"
    }
  ];
}