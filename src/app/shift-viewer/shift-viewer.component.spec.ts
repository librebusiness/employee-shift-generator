import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftViewerComponent } from './shift-viewer.component';

describe('ShiftViewerComponent', () => {
  let component: ShiftViewerComponent;
  let fixture: ComponentFixture<ShiftViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
