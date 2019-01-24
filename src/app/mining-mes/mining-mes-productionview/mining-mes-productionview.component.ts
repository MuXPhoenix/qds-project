import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mining-mes-productionview',
  templateUrl: './mining-mes-productionview.component.html'
})
export class MiningMesProductionviewComponent implements OnInit {
    item:number = 0;

    constructor() { }

    ngOnInit() {
    }
    OnItemClick(value){
        this.item = value;
        console.log(this.item);
    }
    status1option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            top: 10,
            // data:['东邦南','东邦北','西邦','矿石自产']
        },

        series : [
            {
                name: '数据来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:14252, name:'未完成', selected:true},
                    {value:54758, name:'已完成'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    status2option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            top: 10,
            // data:['东邦南','东邦北','西邦','矿石自产']
        },

        series : [
            {
                name: '数据来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:2255, name:'未完成', selected:true},
                    {value:4758, name:'已完成'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

}
