import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import {HttpModule,Http} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoadDataService } from './load-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,RouterModule,RouterModule.forRoot(appRoutes),FormsModule,HttpModule,BrowserAnimationsModule 
  ],
  providers: [LoadDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
