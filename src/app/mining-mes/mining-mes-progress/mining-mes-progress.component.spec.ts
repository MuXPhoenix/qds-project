import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningMesProgressComponent } from './mining-mes-progress.component';

describe('MiningMesProgressComponent', () => {
  let component: MiningMesProgressComponent;
  let fixture: ComponentFixture<MiningMesProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningMesProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningMesProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
