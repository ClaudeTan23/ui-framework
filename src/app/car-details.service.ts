import { Injectable } from '@angular/core';
import { Cars } from './cars/cars.component';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService 
{
  carDetails: Cars[];

  constructor()
  { 
    this.carDetails = [
      {
        id: 1,
        Make: 'Toyota',
        Model: 'Artis',
        Year: '2020',
        Description: 'asdasdasd',
        carPhoto: 'altis.png',
        subscribe: false,
      },
      {
        id: 2,
        Make: 'Toyota',
        Model: 'camry',
        Year: '2021',
        Description: 'asdasdasd',
        carPhoto: 'camry.png',
        subscribe: false,
      },
      {
        id: 3,
        Make: 'Toyota',
        Model: 'vios',
        Year: '2022',
        Description: 'asdasdasd',
        carPhoto: 'vios.png',
        subscribe: false,
      },
    ];
  }

  getCarDetails(): Cars[]
  {
    return this.carDetails;
  }

  getCarDetailsById(id: Number): Cars | undefined
  {
    return this.carDetails.find(data => data.id === id);
  }

}
