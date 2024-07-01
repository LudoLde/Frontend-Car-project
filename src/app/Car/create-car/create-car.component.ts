import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../Models/Car';
import { Router } from '@angular/router';
import { CarApiService } from '../car-api.service';

@Component({
  selector: 'app-edit-car',
  templateUrl:'./create-car.component.html',
  styleUrls: ['/src/styles.css']
})
export class CreateCarComponent implements OnInit{
car: Car;

constructor(private carApiService: CarApiService, private router: Router){}

ngOnInit() {
 this.car = new Car();
}


onSubmit(car: Car) {
  this.carApiService.createCar(car).subscribe(
    () =>{ 
        this.router.navigate([`/car/get_all`])}
  )
}

}

