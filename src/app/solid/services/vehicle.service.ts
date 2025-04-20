import { Injectable } from '@angular/core';
import { VehicleFactory } from '../classes/vehicle-factory';
import { Vehicle } from '../classes/vehicle';
import { ConfigService } from './config.service';
import { VehicleType } from '../classes/vehicle-types';

const API_URL = 'https://api.jsonbin.io/v3/b/67efac888a456b796682551c';
const API_KEY_MASTER = 'YOUR_MASTER_KEY';
const API_KEY_ACCESS = 'YOUR_ACCESS_KEY';

@Injectable({
  providedIn: 'root',
})
export class VehicleReadService {
  public vehicles: Vehicle[] = [];

  constructor(private configService: ConfigService) {}

  addVehicle(vehicle: Vehicle) {
    this.vehicles.push(vehicle);
  }
  removeVehicle(vehicle: Vehicle) {
    const index = this.vehicles.findIndex((v) => v.getID() === vehicle.getID());
    if (index !== -1) {
      this.vehicles.splice(index, 1);
    }
  }
  public async load() {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'X-Master-Key': API_KEY_MASTER,
          'X-Access-Key': API_KEY_ACCESS,
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log('Отримані дані:', json);
      let data = json.record;
      if (!Array.isArray(data)) {
        console.error('Очікувався масив, отримано:', data);
        data = [];
      }
      let vehicles = data.map((item: any) =>
        VehicleFactory.createVehicle(item)
      );
      this.vehicles = vehicles;
      // lab 8
      let type = this.configService.type$.value;
      this.search(type);
    } catch (error) {
      console.error('Помилка при отриманні даних:', error);
    }
  }
  // lab 8
  searchVehicles: Vehicle[] = [];
  search(type: VehicleType) {
    this.searchVehicles = this.vehicles.filter((vehicle) => {
      return vehicle.getType() == type;
    });
    console.log('Знайдені ТЗ: ', this.searchVehicles);
  }
  typeSub = this.configService.type$.subscribe(() => {
    let type = this.configService.type$.value;
    this.search(type);
  });
}
