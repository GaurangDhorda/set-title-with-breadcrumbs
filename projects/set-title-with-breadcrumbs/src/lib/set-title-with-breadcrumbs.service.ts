import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { GetSetPageTitleService } from './get-set-page-title.service';
import { IBreadCrums } from './models/breadcrumbs';
import { IUrlTitle } from './models/url-title';
import { filter, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SetTitleWithBreadcrumbsService {
  
  routerEventsTitle$: Observable<IUrlTitle>;
  breadCrumbs: IBreadCrums[] = [{ label: "", url: "" }];

  constructor(private title: GetSetPageTitleService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
      this.routerEventsTitle$ = this.getSetRouterTitle();
     }

     getSetRouterTitle(): Observable<IUrlTitle> {
      return this.router.events.pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        map((routeUrl: RouterEvent) => {
          let childRouter = this.activatedRouter.firstChild;
          while (childRouter.firstChild) {
            childRouter = childRouter.firstChild;
          }
          if (childRouter.snapshot.data["title"]) {
            let titleBreadCrums: IUrlTitle = {
              url: routeUrl.url,
              title: childRouter.snapshot.data["title"]
            };
            return titleBreadCrums;
          }
          return {
            url: routeUrl.url,
            title: this.title.getCurrentTitle()
          };
        }),
        map((titleUrl: IUrlTitle) => {
          this.breadCrumbs.length = 0;
          let menuItem = this.generateBreadCrums(this.activatedRouter.root);
          this.breadCrumbs.push(...menuItem);
          return { ...titleUrl, breadCrums: this.breadCrumbs };
        }),
        tap((currentTitle: IUrlTitle) => {
          // /this.breadCrumbs.push(currentTitle);
          this.title.setCurrentTitle(currentTitle.title);
          console.log("b ", this.breadCrumbs);
        })
      );
    }

    generateBreadCrums(
      activatedRouter: ActivatedRoute,
      url = "",
      breadcrumbs: IBreadCrums[] = [{ label: "", url: "" }]
    ): IBreadCrums[] {
      const children: ActivatedRoute[] = activatedRouter.children;
  
      if (children.length === 0) {
        return breadcrumbs;
      }
  
      for (const child of children) {
        const routeURL: string = child.snapshot.url
          .map(segment => segment.path)
          .join("/");
        if (routeURL !== "") {
          url += `/${routeURL}`;
        }
  
        console.log("url ", routeURL);
        const label = child.snapshot.data["breadcrums"];
        console.log("label ", label);
        if (label) {
          breadcrumbs.push({ label, url });
        }
  
        return this.generateBreadCrums(child, url, breadcrumbs);
      }
    }
}
