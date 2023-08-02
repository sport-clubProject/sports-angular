import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourtComponent } from './admin-court.component';

describe('AdminCourtComponent', () => {
  let component: AdminCourtComponent;
  let fixture: ComponentFixture<AdminCourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCourtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
