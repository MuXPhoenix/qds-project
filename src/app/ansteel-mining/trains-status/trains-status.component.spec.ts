import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsStatusComponent } from './trains-status.component';

describe('TrainsStatusComponent', () => {
  let component: TrainsStatusComponent;
  let fixture: ComponentFixture<TrainsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
