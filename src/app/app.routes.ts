import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';

export const routes: Routes = [
    {
        path: "",
        component: WelcomeComponent,
        title: "Welcome"
    },
    {
        path: "cars",
        component: CarsComponent,
        title: "Cars"
    },
    {
        path: "car/:id",
        component: CarDetailsComponent,
        title: "Car Details"
    }
];
