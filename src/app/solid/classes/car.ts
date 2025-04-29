import { Vehicle } from './vehicle';

export class Car extends Vehicle {
  constructor(
    id: string,
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
