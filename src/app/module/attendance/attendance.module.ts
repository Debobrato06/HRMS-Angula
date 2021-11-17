import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttnAdminComponent } from './component/attn-admin/attn-admin.component';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AttnAdminService} from './service/attn-admin.service';
import {UserService} from '../hr/service/user/user.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';




@NgModule({
  declarations: [AttnAdminComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
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
    AttnAdminService,
    UserService,
  ]
})
export class AttendanceModule { }

