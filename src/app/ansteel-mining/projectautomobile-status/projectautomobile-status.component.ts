import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectautomobile-status',
  templateUrl: './projectautomobile-status.component.html'
})
export class ProjectautomobileStatusComponent implements OnInit {
    xy_details: boolean = false;  //单击展开，再次单击隐藏

    constructor() { }

    ngOnInit() {
    }
    //单击展开，再次单击隐藏
    changedetails(){
        this.xy_details = (this.xy_details == false);
    }


}
