import { Component, OnInit } from '@angular/core';
import { Car } from '../../Models/Car';
import { CarApiService } from '../car-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-one-car',
  templateUrl: './get-one-car.component.html',
  styles: ``
})
export class GetOneCarComponent implements OnInit{
  car: Car | undefined;

  constructor(private carApiService: CarApiService, private route: ActivatedRoute, private router: Router){}

ngOnInit() {
  const carId = this.route.snapshot.paramMap.get('id')
  if (carId) {
    this.carApiService.getCar(+carId).subscribe(
      car => this.car = car
    )}
}

goToEdit(car: Car) {
  const carId = this.route.snapshot.paramMap.get('id')
  if (carId) {
    this.router.navigate(['/car/edit/', car.id])
   }

}
}
