import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyConsumeElectricityComponent } from './energy-consume-electricity.component';

describe('EnergyConsumeElectricityComponent', () => {
  let component: EnergyConsumeElectricityComponent;
  let fixture: ComponentFixture<EnergyConsumeElectricityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyConsumeElectricityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyConsumeElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
