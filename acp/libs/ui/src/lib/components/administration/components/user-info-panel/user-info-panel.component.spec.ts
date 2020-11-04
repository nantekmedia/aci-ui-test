import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserInfoPanelComponent } from './user-info-panel.component';

describe('UserInfoPanelComponent', () => {
  let component: UserInfoPanelComponent;
  let fixture: ComponentFixture<UserInfoPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
