import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../classes/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`);
  }

  addUser(user:User): void {
    this.http.post<User>(`${this.apiUrl}/add-user`, user).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  saveUser(user:User): void {
    this.http.post<User>(`${this.apiUrl}/save-user`, user).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  deleteUser(id: number): void {
    const params = new HttpParams()
      .set('id', id.toString());
    this.http.post(`${this.apiUrl}/delete-user`, {}, {params}).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }
}
