import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otherautomobile-fuelling',
  templateUrl: './otherautomobile-fuelling.component.html'
})
export class OtherautomobileFuellingComponent implements OnInit {
    xy_details: boolean = false;  //单击展开，再次单击隐藏

    constructor() { }

    ngOnInit() {
    }
    //单击展开，再次单击隐藏
    changedetails(){
        this.xy_details = (this.xy_details == false);
    }


}