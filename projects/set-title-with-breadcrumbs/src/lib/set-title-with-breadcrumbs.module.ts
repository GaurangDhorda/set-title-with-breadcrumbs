import { NgModule } from '@angular/core';
import { SetTitleWithBreadcrumbsComponent } from './set-title-with-breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SetTitleWithBreadcrumbsComponent],
  imports: [
    RouterModule,
    CommonModule 
  ],
  exports: [SetTitleWithBreadcrumbsComponent, RouterModule]
})
export class SetTitleWithBreadcrumbsModule { }
