import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import {RouterModule} from '@angular/router';
import {contentRoutes} from './content.routes';
import { ZhuzjgComponent } from './zhuzjg/zhuzjg.component';
import { YonghglComponent } from './yonghgl/yonghgl.component';
import { JuesglComponent } from './juesgl/juesgl.component';
import { QuanxglComponent } from './quanxgl/quanxgl.component';
import { WenzglComponent } from './wenzgl/wenzgl.component';
import { PinglglComponent } from './pinglgl/pinglgl.component';
import { XitztComponent } from './xitzt/xitzt.component';
import { BaidumapComponent } from './baidumap/baidumap.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(contentRoutes)
  ],
  declarations: [ContentComponent, ZhuzjgComponent, YonghglComponent, JuesglComponent, QuanxglComponent, WenzglComponent, PinglglComponent, XitztComponent, BaidumapComponent]
})
export class ContentModule { }
