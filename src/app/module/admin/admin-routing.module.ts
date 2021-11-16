import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './component/registration/registration.component';
import {AmdUserComponent} from './component/amd-user/amd-user.component';
import {AmdUserDetailsComponent} from './component/amd-user-details/amd-user-details.component';

const routes: Routes = [
  { path: 'admin', component: AmdUserComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'admin/:id',
    component: AmdUserDetailsComponent,
    children: [
      // { path: 'overview', component: DepartmentOverviewComponent},
      // { path: 'contact', component: DepartmentContactComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
