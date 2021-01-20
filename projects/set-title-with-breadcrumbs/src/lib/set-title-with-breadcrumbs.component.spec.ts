import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTitleWithBreadcrumbsComponent } from './set-title-with-breadcrumbs.component';

describe('SetTitleWithBreadcrumbsComponent', () => {
  let component: SetTitleWithBreadcrumbsComponent;
  let fixture: ComponentFixture<SetTitleWithBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTitleWithBreadcrumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTitleWithBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
