import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Designation } from '../../model/designation';
import {DesignationService} from '../../service/desg/designation.service';
import {Observable} from 'rxjs';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit, AfterViewInit {

  // -----------------------------------------------------------------------------------------------------
  // @ constructor and initialization
  // -----------------------------------------------------------------------------------------------------

  constructor(
    private formBuilder: FormBuilder,
    private service: DesignationService,
  ) {}
  // tslint:disable-next-line:typedef


  // -----------------------------------------------------------------------------------------------------
  // @ property declaration
  // -----------------------------------------------------------------------------------------------------

  message: string;
  designationForm: FormGroup;
  model: Designation =  new Designation();
  modelList: Designation[] = new Array();
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'name', 'active', 'action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // tslint:disable-next-line:typedef

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
    this.designationForm = this.formBuilder.group({
      id: ['', ''],
      name: ['', [Validators.required]],
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

  submit(): any{
    if (this.designationForm.value.id){
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

  delete(row: Designation): any{
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

  edit(row: Designation): any{
    this.designationForm = this.formBuilder.group({
      id: [row.id, ''],
      name: [row.name, [Validators.required]],
      active: [row.active],
    });
  }

  generateModel(isCreate: boolean): any{
    // this.model = this.designationForm.value;

    if (isCreate){
      this.model.id = undefined;
    }else{
      this.model.id = this.designationForm.value.id;
    }
    this.model.name = this.designationForm.value.name;
    this.model.active = this.designationForm.value.active;
  }

  clear(): any{
    this.initFormValue();
    this.message = '';
  }

}

