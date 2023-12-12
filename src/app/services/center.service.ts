import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Center} from "../classes/center";
import {Employee} from "../classes/employee";

@Injectable({
  providedIn: 'root'
})
export class CenterService {
  private apiUrl = 'http://localhost:8080/center';

  constructor(private http: HttpClient) {
  }

  getCenters(): Observable<Center[]> {
    return this.http.get<Center[]>(`${this.apiUrl}/centers`);
  }

  getCenter(id: number): Observable<Center> {
    return this.http.get<Center>(`${this.apiUrl}/center/${id}`);
  }

  addCenter(center:Center): void {
    this.http.post<Center>(`${this.apiUrl}/admin/add-center`, center).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  saveCenter(center:Center): void {
    this.http.post<Center>(`${this.apiUrl}/admin/save-center`, center).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  deleteCenter(id: number): void {
    this.http.delete(`${this.apiUrl}/admin/center/${id}`).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  getEmployeesByCenter(id: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/center/${id}/employees`);
  }
}
