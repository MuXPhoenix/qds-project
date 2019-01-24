import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-consume-electricityview',
  templateUrl: './energy-consume-electricityview.component.html'
})
export class EnergyConsumeElectricityviewComponent implements OnInit {
    item:number = 0;

  constructor() { }

  ngOnInit() {
  }
    OnItemClick(value){
        this.item = value;
        console.log(this.item);
    }
    energyoption = {
        title : {
            text: '电铲车',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            top: 40,
            data: ['B1','B2','B3','B4','B5']
        },

        series : [
            {
                name: '数据来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:24, name:'B1'},
                    {value:22.3, name:'B2'},
                    {value:26, name:'B3'},
                    {value:25.2, name:'B4'},
                    {value:21.5, name:'B5'}
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

    energy2option = {
        title : {
            text: '牙轮钻机',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            top: 40,
            data: ['YL1','YL2','YL3','YL4','YL5','YL6','YL7','YL8','YL9']
        },

        series : [
            {
                name: '数据来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:58.68, name:'YL1'},
                    {value:37.2, name:'YL2'},
                    {value:45.6, name:'YL3'},
                    {value:29.4, name:'YL4'},
                    {value:38.4, name:'YL5'},
                    {value:44.50, name:'YL6'},
                    {value:33.72, name:'YL7'},
                    {value:50.94, name:'YL8'},
                    {value:30.66, name:'YL9'}
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
