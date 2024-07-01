import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Car } from '../Models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  apiUrl: string = "http://127.0.0.1:8000/car/"

  constructor(private http: HttpClient) { }

  getAllCar(): Observable<Car[]> {

    return this.http.get<Car[]>(`${this.apiUrl}get_all`)
    .pipe(tap(cars => console.log(cars)
    ),
  catchError(error => {
    console.log(error);
    return of([])
  })) 
 }

  getCar(carId: number): Observable<Car | undefined> {

    return this.http.get<Car>(`${this.apiUrl}get_one/${carId}`)
    .pipe(tap(car => console.log(car)
    ),
  catchError(error => {
    console.log(error);
    return of(undefined)
  }))
  }

  editCar(car: Car): Observable<Car|undefined> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put<Car>(`${this.apiUrl}edit/${car.id}`, car, httpOptions)
    .pipe(catchError(error => {
      console.log(error);
      return of(undefined)
    }))
  }

  createCar(car: Car): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<null>(`${this.apiUrl}create/`, car, httpOptions)
    .pipe(catchError(error => {
      console.log(error);
      return of(null)
    }))
  }

  deleteCar(carId: number): Observable<null> {
    return this.http.delete<null>(`${this.apiUrl}delete/${carId}`)
    .pipe(catchError(error => {
      console.log(error);
      return of(null)
    }))
  }

}
