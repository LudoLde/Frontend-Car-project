import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllCarsComponent } from './Car/get-all-cars/get-all-cars.component';
import { GetOneCarComponent } from './Car/get-one-car/get-one-car.component';
import { EditCarComponent } from './Car/edit-car/edit-car.component';
import { CreateCarComponent } from './Car/create-car/create-car.component';

const routes: Routes = [
  {path: 'car/get_all', component: GetAllCarsComponent},
  {path: 'car/create', component: CreateCarComponent},
  {path: 'car/get_one/:id', component: GetOneCarComponent},
  {path: 'car/edit/:id', component: EditCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
