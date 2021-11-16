import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepermentComponent } from './deperment.component';

describe('DepermentComponent', () => {
  let component: DepermentComponent;
  let fixture: ComponentFixture<DepermentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepermentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
