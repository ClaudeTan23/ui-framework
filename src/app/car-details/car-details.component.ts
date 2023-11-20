import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Cars } from '../cars/cars.component';
import { CarDetailsService } from '../car-details.service';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent 
{
  carDetails: Cars | undefined;
  carService: CarDetailsService = inject(CarDetailsService);
  route: ActivatedRoute = inject(ActivatedRoute);
  carId: Number = -1;
  validId: boolean = false;

  constructor()
  {
    this.carId = Number(this.route.snapshot.params['id']);

    this.carDetails = this.carService.getCarDetailsById(this.carId);

    this.validId = (this.carDetails!== undefined) ? true : false;

  }

}
