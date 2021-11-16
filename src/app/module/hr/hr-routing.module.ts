import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './component/employee/employee.component';
import {DepermentComponent} from './component/deperment/deperment.component';
import {DesignationComponent} from './component/designation/designation.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'deperments', component: DepermentComponent },
  { path: 'designations', component: DesignationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
