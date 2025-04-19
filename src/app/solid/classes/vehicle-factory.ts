import { Vehicle } from './vehicle';
import { Car } from './car';
import { Motorcycle } from './motorcycle';
import { Truck } from './truck';
import { Boat } from './boat';
import { vehicleType } from './vehicle-types';

export class VehicleFactory {
  public static createVehicle(data: any): Vehicle {
    switch (data.type) {
      case vehicleType[0]:
        return new Car(data.id, data.price, data.brand, data.model, data.year);
      case vehicleType[1]:
        return new Truck(
          data.id,
          data.price,
          data.brand,
          data.model,
          data.year
        );
      case vehicleType[2]:
        return new Motorcycle(
          data.id,
          data.price,
          data.brand,
          data.model,
          data.year
        );
      case vehicleType[3]:
        return new Boat(data.id, data.price, data.brand, data.model, data.year);
      default:
        throw new Error(`Невідомий тип транспорту: ${data.type}`);
    }
  }
}
