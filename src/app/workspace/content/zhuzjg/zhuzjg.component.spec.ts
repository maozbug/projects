import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhuzjgComponent } from './zhuzjg.component';

describe('ZhuzjgComponent', () => {
  let component: ZhuzjgComponent;
  let fixture: ComponentFixture<ZhuzjgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhuzjgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhuzjgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
