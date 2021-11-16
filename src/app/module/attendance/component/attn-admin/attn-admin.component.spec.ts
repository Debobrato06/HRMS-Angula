import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttnAdminComponent } from './attn-admin.component';

describe('AttnAdminComponent', () => {
  let component: AttnAdminComponent;
  let fixture: ComponentFixture<AttnAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttnAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttnAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
