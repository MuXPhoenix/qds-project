import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patrol-task-view',
  templateUrl: './patrol-task-view.component.html'
})
export class PatrolTaskViewComponent implements OnInit {
    item:number = 0;

    constructor() { }

    ngOnInit() {
    }

    OnItemClick(value){
        this.item = value;
        console.log(this.item);
    }

    patroloption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            top: 40,
            // data:['周累计','月累计','季累计','年累计']
            data:['危险源总数','已处理','未处理']
        },
        grid: {
            top: 100,
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['2018/11/20','2018/11/21','2018/11/22','2018/11/23','2018/11/24','2018/11/25','2018/11/26']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'危险源总数',
                type:'bar',
                data:[200, 300, 200, 300, 200, 300, 200],
                markLine : {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data : [
                        [{type : 'min'}, {type : 'max'}]
                    ]
                }
            },
            {
                name:'已处理',
                type:'bar',
                barWidth : 10,
                stack: '危险源',
                data:[180, 180, 160, 200, 100, 130, 110]
            },
            {
                name:'未处理',
                type:'bar',
                barWidth : 10,
                stack: '危险源',
                data:[20, 120, 40, 100, 100, 170, 90]
            }
        ]
    };


}
