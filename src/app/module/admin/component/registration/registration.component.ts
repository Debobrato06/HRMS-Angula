import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../../service/registration/registration.service';
import {ConfirmedValidator} from '../../../../validation/confirmed.validator';
import {Registration} from '../../model/registration';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  message: string;
  registrationForm: FormGroup;
  model: Registration = new Registration();
  modelList: Registration[] = new Array();
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initFormValue();
    this.passwordMatch();
  }

  // tslint:disable-next-line:typedef
  initFormValue() {
    this.registrationForm = this.formBuilder.group({
      // id: ['', ''],
      // photo: ['', ''],
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required]],
      password: ['', [Validators.required]],
      matchPassword: ['', [Validators.required]],
      active: [false],

    });
  }
  //

  // tslint:disable-next-line:typedef
  get f(){
    return this.registrationForm.controls;
  }

  passwordMatch(): any {
    this.registrationForm = this.formBuilder.group({
      photo: ['', ''],
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required]],
      password: ['', [Validators.required]],
      matchPassword: ['', [Validators.required]],
      active: [false],
    }, {
      validator: ConfirmedValidator('password', 'matchPassword')
    });

  }

  // -----------------------------------------------------------------------------------------------------
  // @ API Calling
  // -----------------------------------------------------------------------------------------------------
// tslint:disable-next-line:typedef
  submit(){
    if (!this.isCodeUnique(this.registrationForm.value.code)) {
      this.message = 'Code already used';
      console.log('Code already used');
      return;
    }
    if (!this.isEmailUnique(this.registrationForm.value.email)) {
      this.message = 'Email already used';
      console.log('Email already used');
      return;
    }
    if (!this.isMobileNoUnique(this.registrationForm.value.mobileNo)) {
      this.message = 'Mobile number already used';
      console.log('Mobile number already used');
      return;
    }
    this.generateModel();
    console.log(this.model);
    this.registrationService.registration(this.model).subscribe(data => {
      console.log(data);
      if (data.status === 'SUCCESS'){
        console.log('Registration success');
        this.errorMessage = 'Registration success';
        this.message = 'Registration success';
        this.router.navigate(['/login']);
      }else {
        console.log('Registration unsuccessfully');
        this.message = 'Registration unsuccessfully';
        this.errorMessage = 'Registration unsuccessfully';
      }
    }, err => {
      console.log('unable to access data');
      this.message = 'unable to access data';
      this.errorMessage = 'unable to access data';
    });
  }

  // // -----------------------------------------------------------------------------------------------------
  // // @ View functionality
  // // -----------------------------------------------------------------------------------------------------
  //
  generateModel(): any {

    this.model.code = this.registrationForm.value.code;
    this.model.name = this.registrationForm.value.name;
    this.model.email = this.registrationForm.value.email;
    this.model.mobileNo = this.registrationForm.value.mobileNo;
    this.model.password = this.registrationForm.value.password;
    this.model.matchPassword = this.registrationForm.value.matchPassword;
    this.model.active = this.registrationForm.value.active;


  }

  clear(): any {
    this.initFormValue();
    this.message = '';
  }

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
