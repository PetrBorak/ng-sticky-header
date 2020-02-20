import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyHeaderAngularComponent } from './sticky-header-angular.component';

describe('StickyHeaderAngularComponent', () => {
  let component: StickyHeaderAngularComponent;
  let fixture: ComponentFixture<StickyHeaderAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyHeaderAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyHeaderAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
