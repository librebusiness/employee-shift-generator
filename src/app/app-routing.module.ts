import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShiftViewerComponent } from './shift-viewer/shift-viewer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((mod) => mod.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule) },
  { path: ':username', component: ShiftViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
