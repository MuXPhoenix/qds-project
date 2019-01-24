import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningMesExplodeviewComponent } from './mining-mes-explodeview.component';

describe('MiningMesExplodeviewComponent', () => {
  let component: MiningMesExplodeviewComponent;
  let fixture: ComponentFixture<MiningMesExplodeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningMesExplodeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningMesExplodeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
