import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AttnAdminComponent} from './component/attn-admin/attn-admin.component';


const routes: Routes = [
  { path: 'attnAdmin', component: AttnAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
