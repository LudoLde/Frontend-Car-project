import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllCarsComponent } from './Car/get-all-cars/get-all-cars.component';
import { CarApiService } from './Car/car-api.service';
import { HttpClientModule } from '@angular/common/http';
import { GetOneCarComponent } from './Car/get-one-car/get-one-car.component';
import { FormsModule } from '@angular/forms';
import { EditCarComponent } from './Car/edit-car/edit-car.component';
import { CreateCarComponent } from './Car/create-car/create-car.component';
import { SearchCarComponent } from './Car/search-car/search-car.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    GetAllCarsComponent,
    GetOneCarComponent,
    EditCarComponent,
    CreateCarComponent,
    SearchCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CarApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
