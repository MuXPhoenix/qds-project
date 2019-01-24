import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyOilConsumptionviewComponent } from './energy-oil-consumptionview.component';

describe('EnergyOilConsumptionviewComponent', () => {
  let component: EnergyOilConsumptionviewComponent;
  let fixture: ComponentFixture<EnergyOilConsumptionviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyOilConsumptionviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyOilConsumptionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
