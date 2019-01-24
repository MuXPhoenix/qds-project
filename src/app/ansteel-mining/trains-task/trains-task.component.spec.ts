import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsTaskComponent } from './trains-task.component';

describe('TrainsTaskComponent', () => {
  let component: TrainsTaskComponent;
  let fixture: ComponentFixture<TrainsTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
