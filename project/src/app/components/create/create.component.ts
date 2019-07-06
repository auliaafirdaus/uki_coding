import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEmployee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  angForm: FormGroup;
  employees: IEmployee[];
  form = {};

  constructor(private employeeservice: EmployeeService, private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit() {
  }
  
  @Output() someEvent = new EventEmitter<boolean>();

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      department: ['', Validators.required ]
   });
  }

  callParent() {
    this.someEvent.emit(true);
  }

  get() {
    this.employeeservice
      .get()
      .subscribe((data:any) => {
      this.employees= data.data;
    });
  }

  submit(name, department){
    this.employeeservice.create(name, department).then(
      res => { // Success
        console.log("post success");
        this.get();
        this.form = [];
        this.callParent();
    });
  }


}
