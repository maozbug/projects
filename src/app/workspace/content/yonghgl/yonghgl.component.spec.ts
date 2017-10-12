import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YonghglComponent } from './yonghgl.component';

describe('YonghglComponent', () => {
  let component: YonghglComponent;
  let fixture: ComponentFixture<YonghglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YonghglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YonghglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
