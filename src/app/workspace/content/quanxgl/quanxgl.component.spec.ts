import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanxglComponent } from './quanxgl.component';

describe('QuanxglComponent', () => {
  let component: QuanxglComponent;
  let fixture: ComponentFixture<QuanxglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanxglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanxglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
