import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WenzglComponent } from './wenzgl.component';

describe('WenzglComponent', () => {
  let component: WenzglComponent;
  let fixture: ComponentFixture<WenzglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WenzglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WenzglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
