import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleLayoutsComponent } from './style-layouts.component';

describe('StyleLayoutsComponent', () => {
  let component: StyleLayoutsComponent;
  let fixture: ComponentFixture<StyleLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
