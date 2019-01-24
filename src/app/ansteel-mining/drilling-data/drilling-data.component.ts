import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drilling-data',
  templateUrl: './drilling-data.component.html'
})
export class DrillingDataComponent implements OnInit {
    xy_details: boolean = false;  //单击展开，再次单击隐藏

    constructor() { }

    ngOnInit() {
    }
    //单击展开，再次单击隐藏
    changedetails(){
        this.xy_details = (this.xy_details == false);
    }
    driverdataoption = {
        // title: {
        //     text: '司机行驶数据'
        // },
        tooltip: {},
        legend: {
            // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '安全', max: 6500},
                { name: '超速', max: 16000},
                { name: '油耗', max: 30000},
                { name: '行驶里程', max: 38000},
                { name: '平均时速', max: 52000},
            ]
        },
        series: [{
            name: '司机行驶数据',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '司机行驶数据'
                }
            ]
        }]
    };



}
