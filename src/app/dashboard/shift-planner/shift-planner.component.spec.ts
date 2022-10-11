import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftPlannerComponent } from './shift-planner.component';

describe('ShiftPlannerComponent', () => {
  let component: ShiftPlannerComponent;
  let fixture: ComponentFixture<ShiftPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftPlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
