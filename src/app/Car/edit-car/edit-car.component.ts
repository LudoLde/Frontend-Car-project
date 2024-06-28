import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../Models/Car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarApiService } from '../car-api.service';

@Component({
  selector: 'app-edit-car',
  templateUrl:'./edit-car.component.html',
  styleUrls: ['/src/styles.css']
})
export class EditCarComponent implements OnInit{
@Input() car: Car;

constructor(private route: ActivatedRoute, private carApiService: CarApiService, private router: Router){}

ngOnInit() {
  const carId: string|null = this.route.snapshot.paramMap.get('id')
  if(carId){
    this.carApiService.getCar(+carId).subscribe(
      car => {
        if (car) {
          this.car = car;
        } else {
          console.error('Car not found');
        }
      },
      error => {
        console.error('Error fetching car:', error);
      }
    );}
}


goBackToCarDetails(car: Car) {
  this.router.navigate(['/car/get_one/', car.id])
}


onSubmit(car: Car) {
  this.carApiService.editCar(car).subscribe(
    () =>{ 
      if(car){
        this.router.navigate([`/car/get_one/${car.id}`])
      }}
  )
}

}
