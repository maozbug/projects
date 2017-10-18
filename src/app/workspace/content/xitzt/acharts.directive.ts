import { Directive,Input ,OnInit,ElementRef } from '@angular/core';

import * as echarts from 'echarts';

@Directive({

  selector:'echart'
  
})
export class AchartsDirective implements OnInit {

	@Input('chartType') chartType:any;
	
  constructor(private el:ElementRef) { }
	
	public ngOnInit():void{
		console.log(this.el.nativeElement);

		
		echarts.init(this.el.nativeElement).setOption(this.chartType);
	}
	
}