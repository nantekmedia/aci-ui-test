import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModulePermissionsPanelComponent } from './module-permissions-panel.component';

describe('ModulePermissionsPanelComponent', () => {
  let component: ModulePermissionsPanelComponent;
  let fixture: ComponentFixture<ModulePermissionsPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePermissionsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePermissionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
