import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityTaskComponent } from './security-task.component';

describe('SecurityTaskComponent', () => {
  let component: SecurityTaskComponent;
  let fixture: ComponentFixture<SecurityTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
