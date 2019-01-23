import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyElectricityViewComponent } from './energy-electricity-view.component';

describe('EnergyElectricityViewComponent', () => {
  let component: EnergyElectricityViewComponent;
  let fixture: ComponentFixture<EnergyElectricityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyElectricityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyElectricityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
