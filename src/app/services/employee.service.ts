import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../classes/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/center';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/employee/${id}`);
  }

  addEmployee(employee: Employee): void {
    this.http.post<Employee>(`${this.apiUrl}/admin/add-employee`, employee).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  saveEmployee(employee: Employee): Observable<any> {
    return this.http.post<Employee>(`${this.apiUrl}/admin/save-employee`, employee);
  }

  deleteEmployee(id: number): void {
    this.http.delete(`${this.apiUrl}/admin/employee/${id}`).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }
}
