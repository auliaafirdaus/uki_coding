import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  angForm: FormGroup;
  employee: any = {};
  form : any = {};
  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeservice: EmployeeService, private fb: FormBuilder) { 
      this.createForm()
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.employeeservice.edit(params['id']).subscribe(res => {
          this.form = res['data'];
          console.log(this.form);
        });
      });
    }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      department: ['', Validators.required ]
   });
  }

  update(name, department) {
    this.route.params.subscribe(params => {
       this.employeeservice.update(name, department, params['id']).subscribe((data)=>{
        console.log("update success");
       this.router.navigate(['home']);
      });;
    });
  }

  remove() {
    this.route.params.subscribe(params => {
      this.employeeservice.delete(params['id']).subscribe((data)=>{
        console.log("delete success");
        this.router.navigate(['home']);
      });
    });

  }

}
