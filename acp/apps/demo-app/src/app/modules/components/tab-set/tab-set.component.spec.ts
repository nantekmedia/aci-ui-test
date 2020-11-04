import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabSetComponent } from './tab-set.component';

describe('TabSetComponent', () => {
  let component: TabSetComponent;
  let fixture: ComponentFixture<TabSetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
