import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdUserComponent } from './amd-user.component';

describe('AmdUserComponent', () => {
  let component: AmdUserComponent;
  let fixture: ComponentFixture<AmdUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
