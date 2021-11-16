import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAppComponent } from './leave-app.component';

describe('LeaveAppComponent', () => {
  let component: LeaveAppComponent;
  let fixture: ComponentFixture<LeaveAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
