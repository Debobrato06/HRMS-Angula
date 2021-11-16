import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AmdUserServiceService} from '../../service/admin/amd-user-service.service';
import {MatTableDataSource} from '@angular/material/table';
import {AmdUser} from '../../model/admin';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-amd-user',
  templateUrl: './amd-user.component.html',
  styleUrls: ['./amd-user.component.css']
})
export class AmdUserComponent implements OnInit, AfterViewInit {


  // -----------------------------------------------------------------------------------------------------
  // @ property declaration
  // -----------------------------------------------------------------------------------------------------

  message: string;
  errorMessage: string;
  amdUserForm: FormGroup;
  model: AmdUser =  new AmdUser();
  modelList: AmdUser[] = new Array();
  dataSource = new MatTableDataSource();
  displayedColumns = ['id' , 'photo' , 'code' , 'name' , 'email' , 'mobileNo', 'password' , 'active' , 'action'];
  public selectedId: any;

  // -----------------------------------------------------------------------------------------------------
  // @ constructor and initialization
  // -----------------------------------------------------------------------------------------------------

  constructor(
    private formBuilder: FormBuilder,
    private service: AmdUserServiceService,
    private router: Router,
    private route: ActivatedRoute,
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
    this.amdUserForm = this.formBuilder.group({
      id: ['', ''],
      photo: ['', ''],
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required]],
      password: ['', [Validators.required]],
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
    if (this.amdUserForm.value.id){
      this.generateModel(false);
      this.service.update(this.model, this.model.id).subscribe(res => {
        this.message = 'Update Success';
        this.getAll();
        this.initFormValue();
      }, error => {
        console.log(error);
      });
    }else{
      if (!this.isCodeUnique(this.amdUserForm.value.code)) {
        this.message = 'Code already used';
        console.log('Code already used');
        return;
      }
      if (!this.isEmailUnique(this.amdUserForm.value.email)) {
        this.message = 'Email already used';
        console.log('Email already used');
        return;
      }
      if (!this.isMobileNoUnique(this.amdUserForm.value.mobileNo)) {
        this.message = 'Mobile number already used';
        console.log('Mobile number already used');
        return;
      }
      this.generateModel(true);
      console.log(this.model);
      this.service.create(this.model).subscribe(res => {
        this.message = 'Save Success';
        this.getAll();
        this.initFormValue();
      }, error => {
        console.log(error);
        this.message = 'unable to access data';
      });
    }
  }
  delete(row: AmdUser): any{
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

  edit(row: AmdUser): any{
    this.amdUserForm = this.formBuilder.group({

      id: [row.id, ''],
      photo: [row.photo, ''],
      code: [row.code, [Validators.required]],
      name: [row.name, [Validators.required]],
      email: [row.email, [Validators.required]],
      mobileNo: [row.mobileNo, [Validators.required]],
      password: [row.password, [Validators.required]],
      active: [row.active],

    });
  }

  finduser(row: AmdUser): any {
    this.service.find(row.id).subscribe(res => {
      this.message = 'Success';
    }, error => {
      console.log(error);
    });
  }

  generateModel(isCreate: boolean): any{
    // this.model = this.designationForm.value;

    if (isCreate){
      this.model.id = undefined;
    }else{
      this.model.id = this.amdUserForm.value.id;
    }
    this.model.photo = this.amdUserForm.value.photo;
    this.model.code = this.amdUserForm.value.code;
    this.model.name = this.amdUserForm.value.name;
    this.model.email = this.amdUserForm.value.email;
    this.model.mobileNo = this.amdUserForm.value.mobileNo;
    this.model.password = this.amdUserForm.value.password;
    this.model.active = this.amdUserForm.value.active;

  }

  clear(): any{
    this.initFormValue();
    this.message = '';
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Optional Routing
  // -----------------------------------------------------------------------------------------------------

  // tslint:disable-next-line:typedef no-shadowed-variable
  onSelect(User: {  id: any; }) {
    this.router.navigate([User.id], { relativeTo: this.route });
  }

  // tslint:disable-next-line:typedef
  isSelected(User: { id: any; }) {
    return User.id === this.selectedId;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ All Unique validation check function here
  // -----------------------------------------------------------------------------------------------------

  /*All Unique validation check function here*/
  isCodeUnique(code: string): boolean{

    const foundObj = this.modelList.find(user => user.code === code);
    return foundObj ? false : true;

  }

  isEmailUnique(email: string): boolean{

    const foundObj = this.modelList.find(user => user.email === email);
    return foundObj ? false : true;

  }

  isMobileNoUnique(mobileNo: string): boolean{

    const foundObj = this.modelList.find(user => user.mobileNo === mobileNo);
    return foundObj ? false : true;

  }

}
