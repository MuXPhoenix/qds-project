import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsDataComponent } from './trains-data.component';

describe('TrainsDataComponent', () => {
  let component: TrainsDataComponent;
  let fixture: ComponentFixture<TrainsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
