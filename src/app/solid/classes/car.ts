import { Vehicle } from './vehicle';

export class Car extends Vehicle {
  constructor(
    id: number,
    price: number,
    brand: string,
    model: string,
    year: number
  ) {
    super(id, price, brand, model, year);
  }
  override getType(): string {
    return 'Car';
  }
}
