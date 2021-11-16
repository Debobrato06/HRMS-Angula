import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './module/admin/component/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule) },
  { path: 'hr', loadChildren: () => import('./module/hr/hr.module').then(m => m.HrModule) },
  { path: 'tnl', loadChildren: () => import('./module/tnl/tnl.module').then(m => m.TnlModule) },
  { path: 'report', loadChildren: () => import('./module/reports/reports.module').then(m => m.ReportsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
