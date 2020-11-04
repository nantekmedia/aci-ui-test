import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SupplierMatchingComponent } from './supplier-matching.component';

describe('SupplierMatchingComponent', () => {
  let component: SupplierMatchingComponent;
  let fixture: ComponentFixture<SupplierMatchingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierMatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
