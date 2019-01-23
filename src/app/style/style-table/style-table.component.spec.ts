import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTableComponent } from './style-table.component';

describe('StyleTableComponent', () => {
  let component: StyleTableComponent;
  let fixture: ComponentFixture<StyleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
