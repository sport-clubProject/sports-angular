import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSportComponent } from './admin-sport.component';

describe('AdminSportComponent', () => {
  let component: AdminSportComponent;
  let fixture: ComponentFixture<AdminSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
