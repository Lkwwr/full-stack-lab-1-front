import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";


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
    return this.http.get<Car>(`${this.apiUrl}/cars/${id}`);
  }

  addCar(brand: string, model: string, body: string, cost: number): void {
    const params = new HttpParams()
      .set('brand', brand)
      .set('model', model)
      .set('body', body)
      .set('cost', cost);
    this.http.post(`${this.apiUrl}/add-car`, {}, {params}).subscribe(
      (response) => {
        console.log("SUCCESS", response);
      }
    );
  }

  saveCar(id: number, brand: string, model: string, body: string, cost: number): void {
    const params = new HttpParams()
      .set('id', id.toString())
      .set('brand', brand || '')
      .set('model', model || '')
      .set('body', body || '')
      .set('cost', cost ? cost.toString() : '');
    this.http.post(`${this.apiUrl}/save-car`, {}, {params}).subscribe(
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

interface Car {
  id: number,
  brand: string,
  model: string,
  cost: number
}
