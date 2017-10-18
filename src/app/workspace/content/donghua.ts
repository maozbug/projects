import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';

//动画输出
export const donghua = trigger('donghua',[
	state('in',style({transform:'translateX(100%)'})),
	transition('void => *',[
		animate(500,keyframes([
			style({opacity:0,transform:'translateX(100%)'}),
			style({opacity:1,transform:'translateX(0)'})
			
		]))
	])
])