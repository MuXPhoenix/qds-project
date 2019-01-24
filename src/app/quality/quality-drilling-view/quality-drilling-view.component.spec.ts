import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityDrillingViewComponent } from './quality-drilling-view.component';

describe('QualityDrillingViewComponent', () => {
  let component: QualityDrillingViewComponent;
  let fixture: ComponentFixture<QualityDrillingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityDrillingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityDrillingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
