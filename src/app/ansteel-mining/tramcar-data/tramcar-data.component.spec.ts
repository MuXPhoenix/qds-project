import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TramcarDataComponent } from './tramcar-data.component';

describe('TramcarDataComponent', () => {
  let component: TramcarDataComponent;
  let fixture: ComponentFixture<TramcarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramcarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TramcarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
