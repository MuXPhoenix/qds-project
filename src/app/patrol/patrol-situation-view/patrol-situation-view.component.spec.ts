import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrolSituationViewComponent } from './patrol-situation-view.component';

describe('PatrolSituationViewComponent', () => {
  let component: PatrolSituationViewComponent;
  let fixture: ComponentFixture<PatrolSituationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrolSituationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrolSituationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
