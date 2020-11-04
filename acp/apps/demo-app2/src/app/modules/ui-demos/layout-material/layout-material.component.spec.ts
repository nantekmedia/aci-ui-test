import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LayoutMaterialComponent } from './layout-material.component';

describe('LayoutMaterialComponent', () => {
  let component: LayoutMaterialComponent;
  let fixture: ComponentFixture<LayoutMaterialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
