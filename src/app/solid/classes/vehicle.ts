import { IVehicle } from '../interfaces/vehicle.interfaces';

export abstract class Vehicle implements IVehicle {
  private id: string;
  private price: number;
  private brand: string;
  private model: string;
  private year: number;

  constructor(
    id: string,
    price: number,
    brand: string,
    model: string,
    year: number
  ) {
    this.id = id;
    this.price = price;
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  getID(): string {
    return this.id;
  }
  getPrice(): number {
    return this.price;
  }
  getBrand(): string {
    return this.brand;
  }
  getModel(): string {
    return this.model;
  }
  getYear(): number {
    return this.year;
  }
  getType(): string {
    return 'Транспортний засіб';
  }
  setID(id: string): void {
    this.id = id;
  }
}
