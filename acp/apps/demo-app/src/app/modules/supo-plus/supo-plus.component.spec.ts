import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SupoPlusComponent } from './supo-plus.component';

describe('SupoPlusComponent', () => {
  let component: SupoPlusComponent;
  let fixture: ComponentFixture<SupoPlusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupoPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupoPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
