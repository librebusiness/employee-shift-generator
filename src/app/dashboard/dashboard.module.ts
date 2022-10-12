import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { ShiftPlannerComponent } from './shift-planner/shift-planner.component';
import { ShiftDetailComponent } from './shift-detail/shift-detail.component';
import { ContainerComponent } from './container/container.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    SummaryComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    ShiftListComponent,
    ShiftPlannerComponent,
    ShiftDetailComponent,
    ContainerComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
