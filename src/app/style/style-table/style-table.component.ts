import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-table',
  templateUrl: './style-table.component.html',
  styleUrls: ['./style-table.component.css']
})
export class StyleTableComponent implements OnInit {
    xy_details: boolean = false;  //单击展开，再次单击隐藏

    constructor() { }

    ngOnInit() {
    }
    //单击展开，再次单击隐藏
    changedetails(){
        this.xy_details = (this.xy_details == false);
    }


}