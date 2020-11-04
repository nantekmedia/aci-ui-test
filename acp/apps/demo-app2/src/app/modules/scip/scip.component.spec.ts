import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScipComponent } from './scip.component';

describe('ScipComponent', () => {
  let component: ScipComponent;
  let fixture: ComponentFixture<ScipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
