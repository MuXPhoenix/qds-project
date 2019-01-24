import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityDrillingComponent } from './quality-drilling.component';

describe('QualityDrillingComponent', () => {
  let component: QualityDrillingComponent;
  let fixture: ComponentFixture<QualityDrillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityDrillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityDrillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
