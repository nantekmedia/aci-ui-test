import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormMaterialComponent } from './form-material.component';

describe('FormMaterialComponent', () => {
  let component: FormMaterialComponent;
  let fixture: ComponentFixture<FormMaterialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
