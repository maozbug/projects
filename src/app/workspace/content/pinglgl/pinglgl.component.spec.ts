import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinglglComponent } from './pinglgl.component';

describe('PinglglComponent', () => {
  let component: PinglglComponent;
  let fixture: ComponentFixture<PinglglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinglglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinglglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
