import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailsService } from '../car-details.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})

export class CarsComponent 
{
  carDetails: Cars[] = [];
  carDetailsService: CarDetailsService = inject(CarDetailsService);

  constructor()
  {
    this.carDetails = this.carDetailsService.getCarDetails();
  }

}

export interface Cars 
{
  id: Number
  Make: String,
  Model: String,
  Year: String,
  Description: String,
  carPhoto: String,
  subscribe: boolean
}
