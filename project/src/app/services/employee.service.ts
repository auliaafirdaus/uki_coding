import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) { }

  create(name, department) {
    const obj = {
      name: name,
      department: department
    };
    return this.http.post(`${this.uri}/`, obj)
        .toPromise();
  }

  get() {
    return this
           .http
           .get(`${this.uri}`);
  }

  delete(id) {
    return this
      .http
      .delete(`${this.uri}/${id}`);
  }

  edit(id) {
    return this
    .http
    .get(`${this.uri}/${id}`);
  }

  update(name, department, id) {

    const obj = {
      name: name,
      department: department
    };
    return this
      .http
      .put(`${this.uri}/${id}`, obj);
  }
}
