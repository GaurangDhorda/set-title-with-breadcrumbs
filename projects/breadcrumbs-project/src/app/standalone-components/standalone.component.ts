import {Component} from '@angular/core';
import { CommonModule } from "@angular/common";
import { SetTitleWithBreadcrumbsComponent } from "set-title-with-breadcrumbs";

@Component({
    selector: 'standalone-component',
    standalone: true,
    imports: [CommonModule, SetTitleWithBreadcrumbsComponent],
    template: `
      
      <lib-set-title-with-breadcrumbs></lib-set-title-with-breadcrumbs>
    `,
  })
  export class StandaloneComponent {
    name = 'Angular';
  }
  