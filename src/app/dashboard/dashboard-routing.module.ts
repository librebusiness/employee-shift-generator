import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { ShiftDetailComponent } from './shift-detail/shift-detail.component';
import { ShiftPlannerComponent } from './shift-planner/shift-planner.component';

const routes: Routes = [
  { path: '', component: SummaryComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'employee/list', component: EmployeeListComponent },
  { path: 'employee/detail/:id', component: EmployeeDetailComponent },
  { path: 'shifts/list', component: ShiftListComponent },
  { path: 'shifts/detail/:id', component: ShiftDetailComponent },
  { path: 'planner', component: ShiftPlannerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
