import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-dashboard',
  templateUrl: './style-dashboard.component.html',
  styleUrls: ['./style-dashboard.component.css']
})
export class StyleDashboardComponent implements OnInit {
    item:number = 0;

  constructor() { }

  ngOnInit() {
  }
    OnItemClick(value){
        this.item = value;
        console.log(this.item);
    }

}
