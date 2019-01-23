import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssayComponent } from './quality-assay.component';

describe('QualityAssayComponent', () => {
  let component: QualityAssayComponent;
  let fixture: ComponentFixture<QualityAssayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityAssayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
