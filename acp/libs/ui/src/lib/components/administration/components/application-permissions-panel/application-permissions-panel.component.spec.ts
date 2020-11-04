import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApplicationPermissionsPanelComponent } from './application-permissions-panel.component';

describe('ApplicationPermissionsPanelComponent', () => {
  let component: ApplicationPermissionsPanelComponent;
  let fixture: ComponentFixture<ApplicationPermissionsPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationPermissionsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationPermissionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
