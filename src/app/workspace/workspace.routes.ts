import { RouterModule } from '@angular/router';
import {WorkspaceComponent} from './workspace.component'


export const workspaceRoutes=[
	{
		path:'',
		component:WorkspaceComponent,
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
