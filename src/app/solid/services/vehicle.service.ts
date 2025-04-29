import { Injectable } from '@angular/core';
import { VehicleFactory } from '../classes/vehicle-factory';
import { Vehicle } from '../classes/vehicle';
import { ConfigService } from './config.service';
import { VehicleType } from '../classes/vehicle-types';
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  push,
  remove,
  update,
} from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleReadService {
  public vehicles: Vehicle[] = [];
  searchVehicles: Vehicle[] = [];

  constructor(private configService: ConfigService) {
    initializeApp(environment.firebaseConfig);
    this.typeSub = this.configService.type$.subscribe(() => {
      const type = this.configService.type$.value;
      this.search(type);
    });
  }

  async load() {
    try {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `vehicles`));

      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('Отримані дані з Firebase:', data);

        const vehiclesArray = Object.entries(data).map(
          ([key, value]: [string, any]) => {
            value.id = key;
            return VehicleFactory.createVehicle(value);
          }
        );

        this.vehicles = vehiclesArray;
        const type = this.configService.type$.value;
        this.search(type);
      } else {
        console.log('Немає даних у Firebase!');
        this.vehicles = [];
      }
    } catch (error) {
      console.error('Помилка при зчитуванні даних з Firebase:', error);
    }
  }

  async addVehicle(vehicle: Vehicle) {
    const db = getDatabase();
    const vehiclesRef = ref(db, 'vehicles');
    const newVehicleRef = push(vehiclesRef);
    const id = newVehicleRef.key!;
    vehicle.setID(id);

    const vehicleData = {
      id: vehicle.getID(),
      type: vehicle.getType(),
      brand: vehicle.getBrand(),
      model: vehicle.getModel(),
      year: vehicle.getYear(),
      price: vehicle.getPrice(),
    };

    try {
      await set(newVehicleRef, vehicleData);
      console.log('ТЗ додано до Firebase:', vehicleData);

      await this.load();
    } catch (error) {
      console.error('Помилка при додаванні ТЗ у Firebase:', error);
    }
  }

  async removeVehicle(vehicle: Vehicle) {
    const db = getDatabase();
    const vehicleRef = ref(db, `vehicles/${vehicle.getID()}`);

    try {
      await remove(vehicleRef);
      console.log('ТЗ видалено з Firebase:', vehicle);

      await this.load();
    } catch (error) {
      console.error('Помилка при видаленні ТЗ з Firebase:', error);
    }
  }

  async editVehicle(vehicle: Vehicle) {
    const db = getDatabase();
    const vehicleRef = ref(db, `vehicles/${vehicle.getID()}`);

    try {
      await update(vehicleRef, vehicle);
      const index = this.vehicles.findIndex(
        (v) => v.getID() === vehicle.getID()
      );
      if (index !== -1) {
        this.vehicles[index] = vehicle;
      }
      console.log('ТЗ оновлено у Firebase:', vehicle);
      await this.load();
    } catch (error) {
      console.error('Помилка при оновленні ТЗ у Firebase:', error);
    }
  }

  search(type: VehicleType) {
    this.searchVehicles = this.vehicles.filter((vehicle) => {
      return vehicle.getType() == type;
    });
    console.log('Знайдені ТЗ: ', this.searchVehicles);
  }

  typeSub;
}
