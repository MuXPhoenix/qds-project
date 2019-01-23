import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillingDataComponent } from './drilling-data.component';

describe('DrillingDataComponent', () => {
  let component: DrillingDataComponent;
  let fixture: ComponentFixture<DrillingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
