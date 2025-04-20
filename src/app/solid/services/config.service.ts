import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VehicleType, vehicleType } from '../classes/vehicle-types';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  currentType = DEFAULT_TYPE;

  type$: BehaviorSubject<VehicleType> = new BehaviorSubject<VehicleType>(
    DEFAULT_TYPE
  );

  setType(type: VehicleType) {
    console.log('Є зміни!');
    this.type$.next(type);
  }
}
const DEFAULT_TYPE = vehicleType[0];
