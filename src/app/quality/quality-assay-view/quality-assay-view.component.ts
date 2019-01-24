import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality-assay-view',
  templateUrl: './quality-assay-view.component.html'
})
export class QualityAssayViewComponent implements OnInit {
    item:number = 0;

    constructor() { }

    ngOnInit() {
    }

    OnItemClick(value){
        this.item = value;
        console.log(this.item);
    }
    patroloption = {
        angleAxis: {
        },
        radiusAxis: {
            type: 'category',
            data: ['元素1', '元素2', '元素3'],
            z: 10
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [5, 10, 3],
            coordinateSystem: 'polar',
            name: '元素1',
            stack: 'a'
        }, {
            type: 'bar',
            data: [8, 14, 6],
            coordinateSystem: 'polar',
            name: '元素2',
            stack: 'a'
        }, {
            type: 'bar',
            data: [11, 22, 15],
            coordinateSystem: 'polar',
            name: '元素3',
            stack: 'a'
        }],
        legend: {
            show: true,
            data: ['元素1', '元素2', '元素3']
        }
    };


}
