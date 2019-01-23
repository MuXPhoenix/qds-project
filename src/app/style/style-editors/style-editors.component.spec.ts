import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleEditorsComponent } from './style-editors.component';

describe('StyleEditorsComponent', () => {
  let component: StyleEditorsComponent;
  let fixture: ComponentFixture<StyleEditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleEditorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleEditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
