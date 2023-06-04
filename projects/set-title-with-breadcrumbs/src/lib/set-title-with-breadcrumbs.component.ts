import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUrlTitle } from './models/url-title';
import { SetTitleWithBreadcrumbsService } from './set-title-with-breadcrumbs.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'lib-set-title-with-breadcrumbs',
  standalone:true,
  imports:[AsyncPipe, NgIf,NgFor],
  template: `
  <ng-container *ngIf="routerEventsTitle$ | async as breadcrumbs">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            Your are at :
            <li *ngFor="let bc of breadcrumbs?.breadCrums; let last = last" class="breadcrumb-item" aria-current="page" [class.active]="last">
                <a *ngIf="last !==true" [routerLink]="bc.url"> {{bc.label}} </a>
                <span *ngIf="last" > {{bc.label}} </span>
            </li>
        </ol>
    </nav>
  </ng-container>
  `,
  styles: [`
    .breadcrumb{
      display: -ms-flexbox;
      display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: .75rem 1rem;
        margin-bottom: 1rem;
        list-style: none;
        background-color: #e9ecef;
        border-radius: .25rem;
    }
    .breadcrumb-item {
      display: -ms-flexbox;
      display: flex;
    }
    .breadcrumb-item+.breadcrumb-item {
      padding-left: .5rem;
    }
    .breadcrumb-item+.breadcrumb-item::before {
      display: inline-block;
      padding-right: .5rem;
      color: #6c757d;
      content: "/";
    }
    .breadcrumb-item.active {
      color: #6c757d;
    }
    `
  ]
})
export class SetTitleWithBreadcrumbsComponent implements OnInit {
  routerEventsTitle$: Observable<IUrlTitle>;
  constructor(private breadService: SetTitleWithBreadcrumbsService) { }

  ngOnInit(): void {
    this.routerEventsTitle$ = this.breadService.routerEventsTitle$;
  }

}
