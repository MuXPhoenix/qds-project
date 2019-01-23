import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsFuellingComponent } from './trains-fuelling.component';

describe('TrainsFuellingComponent', () => {
  let component: TrainsFuellingComponent;
  let fixture: ComponentFixture<TrainsFuellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsFuellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsFuellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
