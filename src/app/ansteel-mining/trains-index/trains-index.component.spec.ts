import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsIndexComponent } from './trains-index.component';

describe('TrainsIndexComponent', () => {
  let component: TrainsIndexComponent;
  let fixture: ComponentFixture<TrainsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
