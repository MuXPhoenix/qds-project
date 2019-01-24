import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-oil-consumptionview',
  templateUrl: './energy-oil-consumptionview.component.html'
})
export class EnergyOilConsumptionviewComponent implements OnInit {
    item:number = 0;

  constructor() { }

  ngOnInit() {
  }
    OnItemClick(value){
        this.item = value;
        console.log(this.item);
    }
    energy3option = {
        title : {
            text: '电动轮',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            top: 40,
            data: ['M1','M2','N1','N2','N3']
        },

        series : [
            {
                name: '数据来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:30.5, name:'M1'},
                    {value:25.2, name:'M2'},
                    {value:24.3, name:'N1'},
                    {value:18.6, name:'N2'},
                    {value:25.4, name:'N3'}
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

    energy4option = {
        title : {
            text: '工程车',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            top: 40,
            data: ['G1','G2','G3','G4','G5']
        },

        series : [
            {
                name: '数据来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:15.2, name:'G1'},
                    {value:16.2, name:'G2'},
                    {value:15.2, name:'G3'},
                    {value:11.2, name:'G4'},
                    {value:14.3, name:'G5'}
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

    energy5option = {
        title : {
            text: '油槽车',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            top: 40,
            data: ['YC1','YC2','YC3']
        },

        series : [
            {
                name: '数据来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:10, name:'YC1'},
                    {value:12.3, name:'YC2'},
                    {value:11.5, name:'YC3'}
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
