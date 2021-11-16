import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {LeaveType} from '../../model/leave-type';
import {LeaveTypeService} from '../../service/leaveType/leave-type.service';
import {Emp} from "../../model/emp";

@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent implements OnInit, AfterViewInit {

  // -----------------------------------------------------------------------------------------------------
  // @ property declaration
  // -----------------------------------------------------------------------------------------------------

  message: string;
  leaveTypeForm: FormGroup;
  model: LeaveType =  new LeaveType();
  modelList: LeaveType[] = new Array();
  dataSource = new MatTableDataSource();
  displayedColumns = ['id' , 'name' , 'allowedLeaveNoMonthly' , 'allowNoOfLeaveYearly', 'active' , 'action'];

  empModel: Emp = new Emp();
  // -----------------------------------------------------------------------------------------------------
  // @ constructor and initialization
  // -----------------------------------------------------------------------------------------------------

  constructor(
    private formBuilder: FormBuilder,
    private service: LeaveTypeService,
  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
    this.initFormValue();
    this.getAll();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // tslint:disable-next-line:typedef
  initFormValue() {
    this.leaveTypeForm = this.formBuilder.group({
      id: ['', ''],
      name: ['', [Validators.required]],
      allowedLeaveNoMonthly: ['', [Validators.required]],
      allowNoOfLeaveYearly: ['', [Validators.required]],
      active: [false],

    });
  }


  // -----------------------------------------------------------------------------------------------------
  // @ API Calling
  // -----------------------------------------------------------------------------------------------------


  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getAll(): any{
    this.service.getList().subscribe(res => {
      this.modelList = res.content;
      this.dataSource = new MatTableDataSource(this.modelList);
    });
  }

  generatePDF(): any{
    this.service.generatePDF().subscribe(res => {
       res = this.empModel;
       return res;
    });
  }

  submit(): any{
    if (this.leaveTypeForm.value.id){
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

  delete(row: LeaveType): any{
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

  edit(row: LeaveType): any{
    this.leaveTypeForm = this.formBuilder.group({

      id: [row.id, ''],
      name: [row.name, [Validators.required]],
      allowedLeaveNoMonthly: [row.allowedLeaveNoMonthly, [Validators.required]],
      allowNoOfLeaveYearly: [row.allowNoOfLeaveYearly, [Validators.required]],
      active: [row.active],

    });
  }

  generateModel(isCreate: boolean): any{
    // this.model = this.designationForm.value;

    if (isCreate){
      this.model.id = undefined;
    }else{
      this.model.id = this.leaveTypeForm.value.id;
    }
    this.model.name = this.leaveTypeForm.value.name;
    this.model.allowedLeaveNoMonthly = this.leaveTypeForm.value.allowedLeaveNoMonthly;
    this.model.allowNoOfLeaveYearly = this.leaveTypeForm.value.allowNoOfLeaveYearly;
    this.model.active = this.leaveTypeForm.value.active;

  }

  clear(): any{
    this.initFormValue();
    this.message = '';
  }


}
