import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tanktruck-setting',
  templateUrl: './tanktruck-setting.component.html'
})
export class TanktruckSettingComponent implements OnInit {
    xy_details: boolean = false;  //单击展开，再次单击隐藏

    constructor() { }

    ngOnInit() {
    }
    //单击展开，再次单击隐藏
    changedetails(){
        this.xy_details = (this.xy_details == false);
    }


}
