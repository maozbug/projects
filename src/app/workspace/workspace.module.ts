import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { LeftComponent } from './left/left.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { workspaceRoutes } from './workspace.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(workspaceRoutes)
  ],
  declarations: [WorkspaceComponent, LeftComponent, HeaderComponent]
})
export class WorkspaceModule { }
