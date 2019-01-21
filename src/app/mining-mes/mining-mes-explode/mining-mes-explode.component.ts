import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mining-mes-explode',
  templateUrl: './mining-mes-explode.component.html'
})
export class MiningMesExplodeComponent implements OnInit {
    xy_details: boolean = false;  //单击展开，再次单击隐藏

    constructor() { }

    ngOnInit() {
    }
    //单击展开，再次单击隐藏
    changedetails(){
        this.xy_details = (this.xy_details == false);
    }


}