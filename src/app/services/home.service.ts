import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Home} from "../classes/home";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getHome():Observable<Home>{
    return this.http.get<Home>(`${this.apiUrl}/home`);
  }
}


