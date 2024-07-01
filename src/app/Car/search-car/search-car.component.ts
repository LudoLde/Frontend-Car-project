import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../Models/Car';
import { Router } from '@angular/router';
import { CarApiService } from '../car-api.service';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styles: ``
})
export class SearchCarComponent implements OnInit{
cars$: Observable<Car[]>;
selectedCarBrand: string;
car: Car;

constructor(private router: Router, private carApiService: CarApiService) {}

  ngOnInit() {
   this.cars$ = this.carApiService.getAllCar()
  }

  goToDetail(carId: string) {    
    const link = `car/get_one/${carId}`
    this.router.navigate([link])
  }
}
