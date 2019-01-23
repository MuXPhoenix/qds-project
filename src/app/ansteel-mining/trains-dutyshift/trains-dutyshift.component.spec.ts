import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsDutyshiftComponent } from './trains-dutyshift.component';

describe('TrainsDutyshiftComponent', () => {
  let component: TrainsDutyshiftComponent;
  let fixture: ComponentFixture<TrainsDutyshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsDutyshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsDutyshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
