import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrolTaskViewComponent } from './patrol-task-view.component';

describe('PatrolTaskViewComponent', () => {
  let component: PatrolTaskViewComponent;
  let fixture: ComponentFixture<PatrolTaskViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrolTaskViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrolTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
