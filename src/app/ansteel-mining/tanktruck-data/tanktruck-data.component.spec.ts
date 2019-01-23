import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanktruckDataComponent } from './tanktruck-data.component';

describe('TanktruckDataComponent', () => {
  let component: TanktruckDataComponent;
  let fixture: ComponentFixture<TanktruckDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanktruckDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanktruckDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
