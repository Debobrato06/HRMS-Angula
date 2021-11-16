import { Component, OnInit } from '@angular/core';
import {ReportServiceService} from '../../service/report-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Report} from '../../model/report';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  /*property*/
  message: string;
  reportForm: FormGroup;
  model: Report = new Report();

  disableSelect = new FormControl(false);

  reportName: any[] = [
    {id: 1, name: 'Employee Department', value: 'ListOfEmployeeDepartment.jrxml'},
    {id: 2, name: 'Employee Designation', value: 'ListOfEmployeeDesignation.jrxml'},
    {id: 3, name: 'Leave Summary Employee', value: 'AllEmployeeLeaveSummaryDepartment.jrxml'}
  ];
  reportFormat: string[] = [
    'pdf',
    'xls',
  ];

  dropdownSelectValue: any;


  constructor(
    private formBuilder: FormBuilder,
    private service: ReportServiceService,
  ) { }

  ngOnInit(): void {
    this.initFormValue();
    // this.getReportDept();
  }

  // API Calling


  // View Method

  clear(): any{
    this.initFormValue();
    this.message = '';
  }

  onNameChange(): void{
    const selectValue = this.reportForm.value.name;
    if (selectValue){
      console.log(selectValue.id);
      this.dropdownSelectValue = selectValue;
    }else{
      this.dropdownSelectValue = null;
    }
  }

  printReport(): any {

    const params = new Map<string, object>();

    params.set('P_DEPT_ID', this.reportForm.value.department );
    params.set('P_DESG_ID', this.reportForm.value.designation );
    params.set('FROM_DATE', this.reportForm.value.fromDate );
    params.set('TO_DATE', this.reportForm.value.toDate );

    const convertAsJavaMap = {};
    params.forEach((val: object, key: string) => {
      convertAsJavaMap[key] = val;
    });

    this.model.format = this.reportForm.value.format;
    this.model.name = this.reportForm.value.name.value;
    this.model.params = convertAsJavaMap;

    this.service.printReport(this.model).subscribe(blob => {
      window.open(window.URL.createObjectURL(blob));
    }, error => {
      console.log(error);
    });
  }

  /*helper*/
  initFormValue(): void {
    this.reportForm = this.formBuilder.group({
      format: ['', ''],
      name:  ['', ''],
      department:  ['', ''],
      designation:  ['', ''],
      hr_department:  ['', ''],
      fromDate:  ['', ''],
      toDate:  ['', ''],
    });
  }
}
