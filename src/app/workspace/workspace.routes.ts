import { RouterModule } from '@angular/router';
import {WorkspaceComponent} from './workspace.component'
import { GuardService } from './guard.service'


export const workspaceRoutes=[
	{
		path:'',
		component:WorkspaceComponent,
		canActivate:[GuardService],
		children:[
			{
				path:'',
				redirectTo:'content',
				pathMatch:'full'
			},
			{
				path:'content',
				loadChildren:'./content/content.module#ContentModule'
			}
		]
	}
]
