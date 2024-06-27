import { Component, OnInit } from '@angular/core';
import { Car } from '../../Models/Car';
import { CarApiService } from '../car-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-all-cars',
  templateUrl: './get-all-cars.component.html',
  styles: ``
})
export class GetAllCarsComponent implements OnInit{
  cars: Car[];
  constructor(
    private carApiService: CarApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carApiService.getAllCar().subscribe(
      cars => this.cars = cars
    )
  }

  goToDetailsCar(car: Car) {
      this.router.navigate([`car/get_one/${car.id}`])
  }

}
