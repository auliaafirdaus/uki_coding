import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  employee: IEmployee[];

  constructor(private employeeservice: EmployeeService) { }

  ngOnInit() {
    this.employeeservice
      .get()
      .subscribe((data: IEmployee[]) => {
      this.employee = data;
      console.log(this.employee);
    });
  }
}
