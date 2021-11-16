import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {Deperment} from '../../model/deperment';
import {DepermentService} from '../../service/dept/deperment.service';
import {Employee} from '../../model/employee';
import {Observable} from 'rxjs';
import {EmployeeService} from '../../service/emp/employee.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-deperment',
  templateUrl: './deperment.component.html',
  styleUrls: ['./deperment.component.css']
})
export class DepermentComponent implements OnInit, AfterViewInit {

  // -----------------------------------------------------------------------------------------------------
  // @ property declaration
  // -----------------------------------------------------------------------------------------------------
  searchTerm: string;
  term: string;
  message: string;
  depermentForm: FormGroup;
  model: Deperment =  new Deperment();
  modelList: Deperment[] = new Array();
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'code', 'name', 'active' , 'headOfId' , 'action'];

  modelEmpList: Observable<Employee[]>;
  // -----------------------------------------------------------------------------------------------------
  // @ constructor and initialization
  // -----------------------------------------------------------------------------------------------------

  constructor(
    private formBuilder: FormBuilder,
    private service: DepermentService,
    private employeeService: EmployeeService,
  ) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.initFormValue();
    this.getAll();
    this.getEmpData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // tslint:disable-next-line:typedef
  initFormValue() {
    this.depermentForm = this.formBuilder.group({
      id: ['', ''],
      code: ['', ''],
      name: ['', [Validators.required]],
      headOfId: ['', ''],
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
  getEmpData(): any
  {
    this.employeeService.getList().subscribe(res => {
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
    if (this.depermentForm.value.id){
      this.generateModel(false);
      this.service.update(this.model, this.model.id).subscribe(res => {
        this.message = 'Update Success';
        this.getAll();
        this.initFormValue();
      }, error => {
        console.log(error);
      });
    }else{
      if (!this.isCodeUnique(this.depermentForm.value.code)) {
        this.message = 'Code already used';
        console.log('Code already used');
        return;
      }
      this.generateModel(true);
      this.service.create(this.model).subscribe(res => {
        this.message = 'Save Success';
        this.getAll();
        this.initFormValue();
      }, error => {
        console.log(error);
        this.message = 'Save faild';
      });
    }
  }

  delete(row: Deperment): any{
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

  edit(row: Deperment): any{
    this.depermentForm = this.formBuilder.group({
      id: [row.id, ''],
      code: [row.code, ''],
      name: [row.name, [Validators.required]],
      headOfId: [row.headOfId, ''],
      active: [row.active],

    });
  }

  generateModel(isCreate: boolean): any{
    // this.model = this.designationForm.value;

    if (isCreate){
      this.model.id = undefined;
    }else{
      this.model.id = this.depermentForm.value.id;
    }
    this.model.code = this.depermentForm.value.code;
    this.model.name = this.depermentForm.value.name;
    this.model.headOfId = this.depermentForm.value.headOfId;
    this.model.active = this.depermentForm.value.active;

  }

  clear(): any{
    this.initFormValue();
    this.message = '';
  }

  /*All Unique validation check function here*/
  isCodeUnique(code: string): boolean{

    const foundObj = this.modelList.find(dept => dept.code === code);
    return foundObj ? false : true;

    /*
    for (const emp of this.modelList){
      if (emp.code === code){
        return false;
      }
    }
    return true;*/
  }

}
