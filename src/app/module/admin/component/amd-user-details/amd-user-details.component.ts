import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {AmdUser} from '../../model/admin';
import {AmdUserServiceService} from '../../service/admin/amd-user-service.service';

@Component({
  selector: 'app-amd-user-details',
  templateUrl: './amd-user-details.component.html',
  styleUrls: ['./amd-user-details.component.css']
})
export class AmdUserDetailsComponent implements OnInit {


  public userId: any;

  message: string;
  amdUserForm: FormGroup;
  model: AmdUser =  new AmdUser();
  modelList: AmdUser[] = new Array();


  constructor(private router: Router,
              private route: ActivatedRoute,
              private amdUserServiceService: AmdUserServiceService,
  ) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt( params.get('id') as string);
      console.log('USER_NAME::' + id);
      this.userId = id;



    });
  }

  //
  // // tslint:disable-next-line:typedef
  // goPrevious() {
  //   const previousId = this.userId - 1;
  //   this.router.navigate(['/users', previousId]);
  // }
  // // tslint:disable-next-line:typedef
  // goNext() {
  //   const nextId = this.userId + 1;
  //   this.router.navigate(['/users', nextId]);
  // }


  gotoDepartments(): void {
    console.log(this.userId);
    const selectedId = this.userId ? this.userId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route});
  }

  // // tslint:disable-next-line:typedef
  // showOverview() {
  //   this.router.navigate(['overview'], { relativeTo: this.route });
  // }
  //
  // // tslint:disable-next-line:typedef
  // showContact() {
  //   this.router.navigate(['contact'], { relativeTo: this.route });
  // }

}
