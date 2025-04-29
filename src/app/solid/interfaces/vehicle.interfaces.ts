export interface IVehicle {
  getID(): string;
  getPrice(): number;
  getBrand(): string;
  getModel(): string;
  getYear(): number;
  getType(): string;
  setID(id: string): void;
}
