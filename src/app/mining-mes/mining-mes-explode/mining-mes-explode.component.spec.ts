import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningMesExplodeComponent } from './mining-mes-explode.component';

describe('MiningMesExplodeComponent', () => {
  let component: MiningMesExplodeComponent;
  let fixture: ComponentFixture<MiningMesExplodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningMesExplodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningMesExplodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
