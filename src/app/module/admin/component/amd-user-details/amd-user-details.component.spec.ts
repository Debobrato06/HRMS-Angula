import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdUserDetailsComponent } from './amd-user-details.component';

describe('AmdUserDetailsComponent', () => {
  let component: AmdUserDetailsComponent;
  let fixture: ComponentFixture<AmdUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
