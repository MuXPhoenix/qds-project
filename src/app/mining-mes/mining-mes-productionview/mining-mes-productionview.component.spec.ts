import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningMesProductionviewComponent } from './mining-mes-productionview.component';

describe('MiningMesProductionviewComponent', () => {
  let component: MiningMesProductionviewComponent;
  let fixture: ComponentFixture<MiningMesProductionviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningMesProductionviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningMesProductionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
