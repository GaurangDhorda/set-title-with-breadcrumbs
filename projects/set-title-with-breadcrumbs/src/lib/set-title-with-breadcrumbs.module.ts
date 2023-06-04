import { NgModule } from '@angular/core';
import { SetTitleWithBreadcrumbsComponent } from './set-title-with-breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    CommonModule,
    SetTitleWithBreadcrumbsComponent 
  ],
  exports: [SetTitleWithBreadcrumbsComponent, RouterModule]
})
export class SetTitleWithBreadcrumbsModule { }
