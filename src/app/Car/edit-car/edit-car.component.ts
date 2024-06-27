import { Component, OnInit } from '@angular/core';
import { Car } from '../../Models/Car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarApiService } from '../car-api.service';

@Component({
  selector: 'app-edit-car',
  templateUrl:'./edit-car.component.html',
  styles: ``
})
export class EditCarComponent implements OnInit{
car: Car|undefined = {
  id: 0,
  marque: '',
  modele: '',
  annee_modele: new Date().getFullYear(),
  carburant: '',
  boite_vitesse: '',
  image: undefined,
  createdAt: new Date()
};

constructor(private route: ActivatedRoute, private carApiService: CarApiService, private router: Router){}

ngOnInit() {
  const carId: string|null = this.route.snapshot.paramMap.get('id')
  if(carId)
    {
     this.carApiService.getCar(+carId).subscribe(car => {
      if(car)
        {
          this.car = car
        }
     })
    }else{
      this.car = undefined
    }
}

onFileSelected(event: any): void {
  const file: File = event.target.files[0];
  console.log('Selected file:', file);
  if (file) {
    if (this.car) {
      this.car.image = file;
    }}
}


onSubmit( car: Car, carId: number) {
  this.carApiService.editCar(car, carId).subscribe(
    response => {
      console.log(response);
       this.router.navigate(['/car/get_one/', carId])
    }
  )
 
}

}
