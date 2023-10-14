import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../classes/car";


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/cars`);
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/car/${id}`);
  }

  addCar(car:Car): void {
    this.http.post<Car>(`${this.apiUrl}/add-car`, car).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  saveCar(car:Car): void {
    this.http.post<Car>(`${this.apiUrl}/save-car`, car).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  deleteCar(id: number): void {
    const params = new HttpParams()
      .set('id', id.toString());
    this.http.post(`${this.apiUrl}/delete-car`, {}, {params}).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }
}
