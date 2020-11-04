import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DslComponent } from './dsl.component';

describe('DslComponent', () => {
  let component: DslComponent;
  let fixture: ComponentFixture<DslComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
