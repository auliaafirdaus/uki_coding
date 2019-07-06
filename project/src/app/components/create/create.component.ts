import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEmployee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  employees: IEmployee[];
  form = {};

  constructor(private employeeservice: EmployeeService) { }

  ngOnInit() {
  }
  
  @Output() someEvent = new EventEmitter<boolean>();

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
