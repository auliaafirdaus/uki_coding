import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public show:boolean = false;
  employees: IEmployee[];
  form = {};
  message:boolean = false;

  constructor(private employeeservice: EmployeeService) {
  }

  ngOnInit() {
    this.get();
  }


  receiveMessage($event) {
    if (this.message !== $event) {
      this.get();
    } else {
      console.log('gagal');
    }
  }

  get() {
    this.employeeservice
      .get()
      .subscribe((data:any) => {
      this.employees= data.data;
    });
  }

  open() {
    this.show = !this.show;
  }

  remove(id) {
    this.employeeservice.delete(id).subscribe((data)=>{
      console.log("delete success");
      this.get();
    });
  }

}
