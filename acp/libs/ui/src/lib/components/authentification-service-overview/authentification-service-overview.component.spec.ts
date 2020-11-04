import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthentificationServiceOverviewComponent } from './authentification-service-overview.component';

describe('AuthentificationServiceOverviewComponent', () => {
  let component: AuthentificationServiceOverviewComponent;
  let fixture: ComponentFixture<AuthentificationServiceOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationServiceOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationServiceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
