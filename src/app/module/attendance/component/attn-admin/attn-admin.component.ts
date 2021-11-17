import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {AttnAdmin} from '../../model/attn-admin';
import {Observable} from 'rxjs';
import {AttnAdminService} from '../../service/attn-admin.service';
import {EmployeeService} from '../../service/employee.service';
import {UserService} from '../../service/user.service';
import {Employee} from '../../model/employee';
import {UserEmp} from '../../model/user';

@Component({
  selector: 'app-attn-admin',
  templateUrl: './attn-admin.component.html',
  styleUrls: ['./attn-admin.component.css']
})
export class AttnAdminComponent implements OnInit {

  // -----------------------------------------------------------------------------------------------------
  // @ property declaration
  // -----------------------------------------------------------------------------------------------------

  message: string;
  errorMessage: string;
  attnAdminForm: FormGroup;
  model: AttnAdmin =  new AttnAdmin();
  modelList: AttnAdmin[] = new Array();
  dataSource = new MatTableDataSource();
  displayedColumns = ['id' , 'appDate' , 'userId' , 'empId' , 'onMoment' , 'in' , 'out' , 'remarks', 'action'];

  modelEmpList: Observable<Employee[]>;

  modelUserList: Observable<UserEmp[]>;

  // -----------------------------------------------------------------------------------------------------
  // @ constructor and initialization
  // -----------------------------------------------------------------------------------------------------

  constructor(
    private formBuilder: FormBuilder,
    private service: AttnAdminService,
    private userService: UserService,
    private empService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.initFormValue();
    this.getAll();
    this.getUserData();
    this.getEmployeeData();
  }

  initFormValue(): void {
    this.attnAdminForm = this.formBuilder.group({
      appDate: ['', ''],
      userId: ['', [Validators.required]],
      empId: ['', [Validators.required]],
      onMoment: ['', [Validators.required]],
      in: ['', [Validators.required]],
      out: ['', [Validators.required]],
      remarks: ['', ''],

    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ API Calling
  // -----------------------------------------------------------------------------------------------------
  // tslint:disable-next-line:typedef
  getUserData(): any
  {
    this.userService.getListUser().subscribe(res => {
        this.modelUserList = res.content;
      }
    );
  }
  // tslint:disable-next-line:typedef
  getEmployeeData(): any
  {
    this.empService.getListEmp().subscribe(res => {
        this.modelEmpList = res.content;
      }
    );
  }

  getAll(): any{
    this.service.getList().subscribe(res => {
      this.modelList = res.content;
      this.dataSource = new MatTableDataSource(this.modelList);
    });
  }

  submit(): any{

    this.generateModel(true);
    console.log(this.model);
    this.service.create(this.model).subscribe(data => {
      console.log(data);
      if (data.status === 'SUCCESS'){
        console.log('Data insert success');
        this.errorMessage = 'Data insert success';
        this.message = 'Data insert success';
      }else {
        console.log('Data insert unsuccessfully');
        this.message = 'Data insert unsuccessfully';
        this.errorMessage = 'Data insert unsuccessfully';
      }
    }, err => {
      console.log('unable to access data');
      this.message = 'unable to access data';
      this.errorMessage = 'unable to access data';
    });

  }



  // -----------------------------------------------------------------------------------------------------
  // @ View functionality
  // -----------------------------------------------------------------------------------------------------
  generateModel(isCreate: boolean): any{
    // this.model = this.attnAdminForm.value;
    if (isCreate){
      this.model.id = undefined;
    }else {
      this.model.id = this.attnAdminForm.value.id;
    }
    this.model.appDate = this.attnAdminForm.value.appDate;
    this.model.userId = this.attnAdminForm.value.userId;
    this.model.empId = this.attnAdminForm.value.empId;
    this.model.onMoment = this.attnAdminForm.value.onMoment;
    this.model.in = this.attnAdminForm.value.in;
    this.model.out = this.attnAdminForm.value.out;
    this.model.remarks = this.attnAdminForm.value.remarks;

  }

  clear(): any{
    this.initFormValue();
    this.message = '';
  }

}
