import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllCarsComponent } from './Car/get-all-cars/get-all-cars.component';
import { GetOneCarComponent } from './Car/get-one-car/get-one-car.component';

const routes: Routes = [
  {path: 'car/get_all', component: GetAllCarsComponent},
  {path: 'car/get_one/:id', component: GetOneCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
