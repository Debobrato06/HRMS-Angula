import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeaveTypeComponent} from './component/leave-type/leave-type.component';
import {LeaveAppComponent} from './component/leave-app/leave-app.component';

const routes: Routes = [
  { path: 'leaveType', component: LeaveTypeComponent },
  { path: 'leaveApp', component: LeaveAppComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TnlRoutingModule { }
