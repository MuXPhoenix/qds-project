import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrolSituationComponent } from './patrol-situation.component';

describe('PatrolSituationComponent', () => {
  let component: PatrolSituationComponent;
  let fixture: ComponentFixture<PatrolSituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrolSituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrolSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
