import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Login} from '../../model/login';
import {LoginService} from '../../service/login/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  loginForm: FormGroup;
  model: Login = new Login();
  errorMessage: string;


  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.initFormValue();
  }

  // tslint:disable-next-line:typedef
  initFormValue() {
    this.loginForm = this.formBuilder.group({
      loginId: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ API Calling
  // -----------------------------------------------------------------------------------------------------
// tslint:disable-next-line:typedef
  login(){
    this.generateModel();
    console.log(this.model);
    this.loginService.login(this.model).subscribe(data => {
      console.log(data);
      if (data.status === 'SUCCESS'){
        console.log('login success');
        this.message = 'Login success';
        this.errorMessage = 'Login success';
        this.router.navigate(['admin/admin']);
      }else {
        this.message = 'Invalid login';
        this.errorMessage = 'Invalid login';
      }
      // this.router.navigate(['/profile']);
    }, err => {
      this.message = 'unable to access data';
      this.errorMessage = 'unable to access data';
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ View functionality
  // -----------------------------------------------------------------------------------------------------

  generateModel(): any {
      this.model.loginId = this.loginForm.value.loginId;
      this.model.password = this.loginForm.value.password;
  }
  //
  clear(): any {
    this.initFormValue();
    this.message = '';
  }


}
