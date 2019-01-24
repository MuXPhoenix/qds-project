import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsAlarmComponent } from './trains-alarm.component';

describe('TrainsAlarmComponent', () => {
  let component: TrainsAlarmComponent;
  let fixture: ComponentFixture<TrainsAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
