import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningMesProductionComponent } from './mining-mes-production.component';

describe('MiningMesProductionComponent', () => {
  let component: MiningMesProductionComponent;
  let fixture: ComponentFixture<MiningMesProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningMesProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningMesProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
