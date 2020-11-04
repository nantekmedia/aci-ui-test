import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiDemosComponent } from './ui-demos.component';

describe('UiDemosComponent', () => {
  let component: UiDemosComponent;
  let fixture: ComponentFixture<UiDemosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UiDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
