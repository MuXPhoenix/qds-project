import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningMesDrillviewComponent } from './mining-mes-drillview.component';

describe('MiningMesDrillviewComponent', () => {
  let component: MiningMesDrillviewComponent;
  let fixture: ComponentFixture<MiningMesDrillviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningMesDrillviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningMesDrillviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
