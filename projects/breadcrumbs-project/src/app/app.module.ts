import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SetTitleWithBreadcrumbsModule} from 'set-title-with-breadcrumbs';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SetTitleWithBreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
