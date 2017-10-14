import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { LeftComponent } from './left/left.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { workspaceRoutes } from './workspace.routes';
import { GuardService } from './guard.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(workspaceRoutes)
  ],
  declarations: [WorkspaceComponent, LeftComponent, HeaderComponent],
  providers:[GuardService]
})
export class WorkspaceModule { }
