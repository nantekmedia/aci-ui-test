import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LayoutBootstrapComponent } from './layout-bootstrap.component';

describe('LayoutBootstrapComponent', () => {
  let component: LayoutBootstrapComponent;
  let fixture: ComponentFixture<LayoutBootstrapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
