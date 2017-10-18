import { Component, OnInit } from '@angular/core';
import {donghua} from '../donghua';
@Component({
  selector: 'app-xitzt',
  templateUrl: './xitzt.component.html',
  styleUrls: ['./xitzt.component.css'],
  animations:[donghua]
})
export class XitztComponent implements OnInit {
	private pieEcharts = {
    title : {
        text: 'EMP访问用户分布地区',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['深圳','北京','上海','广州','长沙']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:1548, name:'深圳'},
                {value:111, name:'北京'},
                {value:234, name:'上海'},
                {value:135, name:'广州'},
                {value:548, name:'长沙'}
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
	
  constructor() { }

  ngOnInit() {
  }
}
