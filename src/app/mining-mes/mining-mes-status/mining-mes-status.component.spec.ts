import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningMesStatusComponent } from './mining-mes-status.component';

describe('MiningMesStatusComponent', () => {
  let component: MiningMesStatusComponent;
  let fixture: ComponentFixture<MiningMesStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningMesStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningMesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
