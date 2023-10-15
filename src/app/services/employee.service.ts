import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../classes/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/employee/${id}`);
  }

  addEmployee(employee:Employee): void {
    this.http.post<Employee>(`${this.apiUrl}/add-employee`, employee).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  saveEmployee(employee:Employee): void {
    this.http.post<Employee>(`${this.apiUrl}/save-employee`, employee).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  deleteEmployee(id: number): void {
    const params = new HttpParams()
      .set('id', id.toString());
    this.http.post(`${this.apiUrl}/delete-employee`, {}, {params}).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }
}
