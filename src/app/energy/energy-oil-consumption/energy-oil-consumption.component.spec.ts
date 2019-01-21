import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyOilConsumptionComponent } from './energy-oil-consumption.component';

describe('EnergyOilConsumptionComponent', () => {
  let component: EnergyOilConsumptionComponent;
  let fixture: ComponentFixture<EnergyOilConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyOilConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyOilConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
