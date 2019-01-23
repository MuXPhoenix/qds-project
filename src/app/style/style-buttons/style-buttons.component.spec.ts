import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleButtonsComponent } from './style-buttons.component';

describe('StyleButtonsComponent', () => {
  let component: StyleButtonsComponent;
  let fixture: ComponentFixture<StyleButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
