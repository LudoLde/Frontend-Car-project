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

@NgModule({
  declarations: [
    AppComponent,
    GetAllCarsComponent,
    GetOneCarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CarApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
