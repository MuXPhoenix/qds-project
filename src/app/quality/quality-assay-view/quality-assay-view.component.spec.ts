import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssayViewComponent } from './quality-assay-view.component';

describe('QualityAssayViewComponent', () => {
  let component: QualityAssayViewComponent;
  let fixture: ComponentFixture<QualityAssayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityAssayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAssayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
