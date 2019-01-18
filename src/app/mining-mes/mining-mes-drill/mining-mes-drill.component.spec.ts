import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningMesDrillComponent } from './mining-mes-drill.component';

describe('MiningMesDrillComponent', () => {
  let component: MiningMesDrillComponent;
  let fixture: ComponentFixture<MiningMesDrillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningMesDrillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningMesDrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
