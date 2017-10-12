import {RouterModule} from '@angular/router';
import {ContentComponent} from './content.component'

import { ZhuzjgComponent } from './zhuzjg/zhuzjg.component';
import { YonghglComponent } from './yonghgl/yonghgl.component';
import { JuesglComponent } from './juesgl/juesgl.component';
import { QuanxglComponent } from './quanxgl/quanxgl.component';
import { WenzglComponent } from './wenzgl/wenzgl.component';
import { PinglglComponent } from './pinglgl/pinglgl.component';
import { XitztComponent } from './xitzt/xitzt.component';
import { BaidumapComponent } from './baidumap/baidumap.component';

export const contentRoutes=[
	{
		path:'',
		component:ContentComponent,
		children:[
			{
				path:'',
				redirectTo:'zhuzjg',
				pathMatch:'full'
			},
			{
				path:'zhuzjg',
				component:ZhuzjgComponent
			},
			{
				path:'yonghgl',
				component:YonghglComponent
			},
			{
				path:'juesgl',
				component:JuesglComponent
			},
			{
				path:'quanxgl',
				component:QuanxglComponent
			},
			{
				path:'wenzgl',
				component:WenzglComponent
			},
			{
				path:'pinglgl',
				component:PinglglComponent
			},
			{
				path:'xitzt',
				component:XitztComponent
			},
			{
				path:'baidumap',
				component:BaidumapComponent
			}
		]
	}
]
