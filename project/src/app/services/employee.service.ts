import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) { }

  create(name, description) {
    const obj = {
      name: name,
      description: description
    };
    this.http.post(`${this.uri}/`, obj)
        .subscribe(res => console.log('Done'));
  }

  get() {
    return this
           .http
           .get(`${this.uri}`);
    }
}
