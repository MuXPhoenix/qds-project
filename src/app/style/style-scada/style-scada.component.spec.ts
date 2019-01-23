import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleScadaComponent } from './style-scada.component';

describe('StyleScadaComponent', () => {
  let component: StyleScadaComponent;
  let fixture: ComponentFixture<StyleScadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleScadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleScadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
