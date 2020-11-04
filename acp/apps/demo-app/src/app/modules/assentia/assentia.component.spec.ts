import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssentiaComponent } from './assentia.component';

describe('AssentiaComponent', () => {
  let component: AssentiaComponent;
  let fixture: ComponentFixture<AssentiaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssentiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssentiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
