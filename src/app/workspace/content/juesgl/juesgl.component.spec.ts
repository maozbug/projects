import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuesglComponent } from './juesgl.component';

describe('JuesglComponent', () => {
  let component: JuesglComponent;
  let fixture: ComponentFixture<JuesglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuesglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuesglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
