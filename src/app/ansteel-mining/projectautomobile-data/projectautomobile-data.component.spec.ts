import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectautomobileDataComponent } from './projectautomobile-data.component';

describe('ProjectautomobileDataComponent', () => {
  let component: ProjectautomobileDataComponent;
  let fixture: ComponentFixture<ProjectautomobileDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectautomobileDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectautomobileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
