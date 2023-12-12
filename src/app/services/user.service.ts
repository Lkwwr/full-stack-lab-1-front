import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {User} from "../classes/user";
import {AuthRequest} from "../classes/auth-request";
import {AuthResponse} from "../classes/auth-response";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081/auth';

  constructor(private http: HttpClient) {
  }

  auth(auth:AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth`, auth).pipe(
      catchError(err => {return throwError(err)}))
  }

  register(user:User): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/register`, user).pipe(
      catchError(err => {return throwError(err)})
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/admin/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/admin/user/${id}`);
  }

  deleteUser(id: number): void {
    this.http.delete(`${this.apiUrl}/admin/user/${id}`).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  updateUser(user: User): void {
    this.http.post<User>(`${this.apiUrl}/admin/update-user`, user).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }
}
