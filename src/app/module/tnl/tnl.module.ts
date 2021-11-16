import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TnlRoutingModule } from './tnl-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LeaveAppService} from './service/leaveApp/leave-app.service';
import {LeaveTypeService} from './service/leaveType/leave-type.service';
import {LeaveTypeComponent} from './component/leave-type/leave-type.component';
import {LeaveAppComponent} from './component/leave-app/leave-app.component';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    LeaveTypeComponent,
    LeaveAppComponent,
  ],
  imports: [
    CommonModule,
    TnlRoutingModule,
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
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    NgbModule,
    FormsModule,

  ],
  providers: [
    LeaveAppService,
    LeaveTypeService,
  ]
})
export class TnlModule { }
