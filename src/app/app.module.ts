import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeComponent} from './module/hr/component/employee/employee.component';
import {DepermentComponent} from './module/hr/component/deperment/deperment.component';
import {DesignationComponent} from './module/hr/component/designation/designation.component';
import {DesignationService} from './module/hr/service/desg/designation.service';
import {DepermentService} from './module/hr/service/dept/deperment.service';
import {EmployeeService} from './module/hr/service/emp/employee.service';
import {AppRoutingModule} from './app-routing.module';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {AmdUserComponent} from './module/admin/component/amd-user/amd-user.component';
import {LeaveTypeComponent} from './module/tnl/component/leave-type/leave-type.component';
import {LeaveAppComponent} from './module/tnl/component/leave-app/leave-app.component';
import {RegistrationComponent} from './module/admin/component/registration/registration.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MaterialModule} from './material/material.module';
import { LoginComponent } from './module/admin/component/login/login.component';
import { AmdUserDetailsComponent } from './module/admin/component/amd-user-details/amd-user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
