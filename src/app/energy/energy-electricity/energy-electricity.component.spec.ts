import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyElectricityComponent } from './energy-electricity.component';

describe('EnergyElectricityComponent', () => {
  let component: EnergyElectricityComponent;
  let fixture: ComponentFixture<EnergyElectricityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyElectricityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
