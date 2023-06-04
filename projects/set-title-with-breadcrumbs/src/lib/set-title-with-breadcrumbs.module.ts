import { NgModule } from '@angular/core';
import { SetTitleWithBreadcrumbsComponent } from './set-title-with-breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    
    CommonModule,
    SetTitleWithBreadcrumbsComponent 
  ],
  exports: [SetTitleWithBreadcrumbsComponent]
})
export class SetTitleWithBreadcrumbsModule { }
