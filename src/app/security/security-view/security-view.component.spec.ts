import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityViewComponent } from './security-view.component';

describe('SecurityViewComponent', () => {
  let component: SecurityViewComponent;
  let fixture: ComponentFixture<SecurityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
