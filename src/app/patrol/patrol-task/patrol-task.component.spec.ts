import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrolTaskComponent } from './patrol-task.component';

describe('PatrolTaskComponent', () => {
  let component: PatrolTaskComponent;
  let fixture: ComponentFixture<PatrolTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrolTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrolTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
