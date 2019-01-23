import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleGisComponent } from './style-gis.component';

describe('StyleGisComponent', () => {
  let component: StyleGisComponent;
  let fixture: ComponentFixture<StyleGisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleGisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
