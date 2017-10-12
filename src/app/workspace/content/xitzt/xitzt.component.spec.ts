import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XitztComponent } from './xitzt.component';

describe('XitztComponent', () => {
  let component: XitztComponent;
  let fixture: ComponentFixture<XitztComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XitztComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XitztComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
