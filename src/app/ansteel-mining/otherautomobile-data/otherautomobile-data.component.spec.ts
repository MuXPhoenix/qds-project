import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherautomobileDataComponent } from './otherautomobile-data.component';

describe('OtherautomobileDataComponent', () => {
  let component: OtherautomobileDataComponent;
  let fixture: ComponentFixture<OtherautomobileDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherautomobileDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherautomobileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
