import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsSettingComponent } from './trains-setting.component';

describe('TrainsSettingComponent', () => {
  let component: TrainsSettingComponent;
  let fixture: ComponentFixture<TrainsSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
