import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursLandingPageComponent } from './cours-landing-page.component';

describe('CoursLandingPageComponent', () => {
  let component: CoursLandingPageComponent;
  let fixture: ComponentFixture<CoursLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
