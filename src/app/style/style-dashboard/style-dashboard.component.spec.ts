import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleDashboardComponent } from './style-dashboard.component';

describe('StyleDashboardComponent', () => {
  let component: StyleDashboardComponent;
  let fixture: ComponentFixture<StyleDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
