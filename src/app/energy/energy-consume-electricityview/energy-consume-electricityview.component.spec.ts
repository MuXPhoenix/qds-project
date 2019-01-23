import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyConsumeElectricityviewComponent } from './energy-consume-electricityview.component';

describe('EnergyConsumeElectricityviewComponent', () => {
  let component: EnergyConsumeElectricityviewComponent;
  let fixture: ComponentFixture<EnergyConsumeElectricityviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyConsumeElectricityviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyConsumeElectricityviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
