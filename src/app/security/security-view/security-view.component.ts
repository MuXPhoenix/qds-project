import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-view',
  templateUrl: './security-view.component.html'
})
export class SecurityViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
    securityoption = {
        // title: {
        //     text: '安全管理'
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['总数', '已处理', '未处理']
        },
        grid: {
            left: 100
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'value',
            name: '数量',
            axisLabel: {
                formatter: '{value}'
            }
        },
        yAxis: {
            type: 'category',
            inverse: true,
            data: ['车辆故障', '设备故障', '道路阻断', '安全隐患'],
            axisLabel: {
                formatter: function (value) {
                    // return '{' + value + '| }\n{value|' + value + '}';
                    return '{' + value + ' }';
                },
                margin: 10,
                rich: {
                    value: {
                        lineHeight: 10,
                        align: 'center'
                    },
                    Sunny: {
                        height: 20,
                        align: 'center',
                    },
                    Cloudy: {
                        height: 20,
                        align: 'center',
                    },
                    Showers: {
                        height: 20,
                        align: 'center',
                    }
                }
            }
        },
        series: [
            {
                name: '总数',
                type: 'bar',
                data: [280, 180, 260, 260],
                markPoint: {
                    symbolSize: 1,
                    symbolOffset: [0, '50%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                            backgroundColor: 'rgb(242,242,242)',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            padding: [4, 10],
                            lineHeight: 26,
                            // shadowBlur: 5,
                            // shadowColor: '#000',
                            // shadowOffsetX: 0,
                            // shadowOffsetY: 1,
                            position: 'right',
                            distance: 20,
                            rich: {
                                a: {
                                    align: 'center',
                                    color: '#fff',
                                    fontSize: 18,
                                    textShadowBlur: 2,
                                    textShadowColor: '#000',
                                    textShadowOffsetX: 0,
                                    textShadowOffsetY: 1,
                                    textBorderColor: '#333',
                                    textBorderWidth: 2
                                },
                                b: {
                                    color: '#333'
                                },
                                c: {
                                    color: '#ff8811',
                                    textBorderColor: '#000',
                                    textBorderWidth: 1,
                                    fontSize: 22
                                }
                            }
                        }
                    },
                    data: [
                        {type: 'max', name: 'max number: '},
                        {type: 'min', name: 'min number: '}
                    ]
                }
            },
            {
                name: '已处理',
                type: 'bar',
                stack: '总量',
                barWidth : 16,
                data: [200, 120, 220, 180]
            },
            {
                name: '未处理',
                stack: '总量',
                barWidth : 16,
                type: 'bar',
                data: [80, 60, 40, 20]
            }
        ]
    };

}
