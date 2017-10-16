import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DataTableModule,SharedModule} from 'primeng/primeng';

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
import { EdituseComponent } from './edituse/edituse.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(contentRoutes),
    FormsModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [ContentComponent, ZhuzjgComponent, YonghglComponent, JuesglComponent, QuanxglComponent, WenzglComponent, PinglglComponent, XitztComponent, BaidumapComponent, EdituseComponent]
})
export class ContentModule { }
