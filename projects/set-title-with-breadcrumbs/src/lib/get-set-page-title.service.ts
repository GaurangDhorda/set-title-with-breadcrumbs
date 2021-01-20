import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GetSetPageTitleService {

  constructor(private title: Title) { }
  
  setDefaultTitle(defaultTitle: string) {
    this.setCurrentTitle(defaultTitle);
  }

  getCurrentTitle() {
    return this.title.getTitle();
  }
  setCurrentTitle(titleName: string) {
    this.title.setTitle(titleName);
  }
}
