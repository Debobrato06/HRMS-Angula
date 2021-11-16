import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {LeaveApp} from '../../model/leaveApp/leave-app';
import {LeaveAppService} from '../../service/leaveApp/leave-app.service';
import {Observable} from 'rxjs';
import {LeaveType} from '../../model/leave-type';
import {LeaveTypeService} from '../../service/leaveType/leave-type.service';
import {EmployeeService} from '../../service/employee/employee.service';
import {Employee} from '../../model/employee';


@Component({
  selector: 'app-leave-app',
  templateUrl: './leave-app.component.html',
  styleUrls: ['./leave-app.component.css']
})
export class LeaveAppComponent implements OnInit, AfterViewInit  {

  // -----------------------------------------------------------------------------------------------------
  // @ property declaration
  // -----------------------------------------------------------------------------------------------------

  message: string;
  leaveAppForm: FormGroup;
  model: LeaveApp =  new LeaveApp();
  modelList: LeaveApp[] = new Array();
  dataSource: MatTableDataSource<LeaveApp> = new MatTableDataSource();
  displayedColumns = ['appDate' , 'fromDate' , 'toDate' , 'entry' , 'reason' , 'employeeId' , 'leaveTypeId' , 'onLeaveContactNo' , 'responsiblePersonId', 'remarks' , 'active' , 'action'];

  entrys: any[] = [{id: 1, name: 'ADMIN'}, {id: 2, name: 'USER'}];

  modelLeaveTypeList: Observable<LeaveType[]>;

  modelEmployeeList: Observable<Employee[]>;

  // -----------------------------------------------------------------------------------------------------
  // @ constructor and initialization
  // -----------------------------------------------------------------------------------------------------

  constructor(
    private formBuilder: FormBuilder,
    private service: LeaveAppService,
    private leaveTypeService: LeaveTypeService,
    private employeeService: EmployeeService,
  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
    this.initFormValue();
    this.getAll();
    this.getLeaveTypeData();
    this.getEmployeeData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // tslint:disable-next-line:typedef
  initFormValue() {
    this.leaveAppForm = this.formBuilder.group({
      id: ['', ''],
      appDate:  ['', [Validators.required]],
      fromDate:  ['', [Validators.required]],
      toDate:  ['', [Validators.required]],
      entry:  ['', ''],
      reason:  ['', ''],
      employeeId:  ['', [Validators.required]],
      leaveTypeId:  ['', [Validators.required]],
      onLeaveContactNo:  ['', [Validators.required]],
      responsiblePersonId:  ['', [Validators.required]],
      remarks:  ['', ''],
      active: [false],

    });
  }


  // -----------------------------------------------------------------------------------------------------
  // @ API Calling
  // -----------------------------------------------------------------------------------------------------


  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  // tslint:disable-next-line:typedef
  getEmployeeData(): any
  {
    this.employeeService.getList().subscribe(res => {
        this.modelEmployeeList = res.content;
      }
    );
  }

// tslint:disable-next-line:typedef
  getLeaveTypeData(): any
  {
    this.leaveTypeService.getList().subscribe(res => {
        this.modelLeaveTypeList = res.content;
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
    if (this.leaveAppForm.value.id){
      this.generateModel(false);
      this.service.update(this.model, this.model.id).subscribe(res => {
        this.message = 'Update Success';
        this.getAll();
        this.initFormValue();
      }, error => {
        console.log(error);
      });
    }else{
      this.generateModel(true);
      console.log(this.model);
      this.service.create(this.model).subscribe(res => {
        this.message = 'Save Success';
        this.getAll();
        this.initFormValue();
      }, error => {
        console.log(error);
      });
    }
  }

  delete(row: LeaveApp): any{
    this.service.delete(row.id).subscribe(res => {
      this.message = 'Delete Success';
      this.getAll();
    }, error => {
      console.log(error);
    });
  }


  // -----------------------------------------------------------------------------------------------------
  // @ View functionality
  // -----------------------------------------------------------------------------------------------------

  edit(row: LeaveApp): any{
    this.leaveAppForm = this.formBuilder.group({

      id: [row.id, ''],
      appDate:  [row.appDate, [Validators.required]],
      fromDate:  [row.fromDate, [Validators.required]],
      toDate:  [row.toDate, [Validators.required]],
      entry:  [row.entry, ''],
      reason:  [row.reason, ''],
      employeeId:  [row.employeeId, [Validators.required]],
      leaveTypeId:  [row.leaveTypeId, [Validators.required]],
      onLeaveContactNo:  [row.onLeaveContactNo, [Validators.required]],
      responsiblePersonId:  [row.responsiblePersonId, [Validators.required]],
      remarks:  [row.remarks, ''],
      active: [row.active],

    });
  }

  generateModel(isCreate: boolean): any{
    // this.model = this.designationForm.value;

    if (isCreate){
      this.model.id = undefined;
    }else{
      this.model.id = this.leaveAppForm.value.id;
    }
    this.model.appDate = this.leaveAppForm.value.appDate;
    this.model.fromDate = this.leaveAppForm.value.fromDate;
    this.model.toDate = this.leaveAppForm.value.toDate;
    this.model.entry = this.leaveAppForm.value.entry;
    this.model.reason = this.leaveAppForm.value.reason;
    this.model.employeeId = this.leaveAppForm.value.employeeId;
    this.model.leaveTypeId = this.leaveAppForm.value.leaveTypeId;
    this.model.onLeaveContactNo = this.leaveAppForm.value.onLeaveContactNo;
    this.model.responsiblePersonId = this.leaveAppForm.value.responsiblePersonId;
    this.model.remarks = this.leaveAppForm.value.remarks;
    this.model.active = this.leaveAppForm.value.active;

  }

  clear(): any{
    this.initFormValue();
    this.message = '';
  }



}
