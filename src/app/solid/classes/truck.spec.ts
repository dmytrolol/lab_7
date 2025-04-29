import { Truck } from './truck';

describe('Truck', () => {
  let truck: Truck;

  beforeEach(() => {
    truck = new Truck('1', 50000, 'Volvo', 'FH16', 2022);
  });

  it('should create an instance', () => {
    expect(truck).toBeTruthy();
    expect(truck instanceof Truck).toBeTrue();
  });

  it('should return "Truck" as type', () => {
    expect(truck.getType()).toBe('Truck');
  });

  it('should return correct ID', () => {
    expect(truck.getID()).toBe('1');
  });

  it('should return correct brand', () => {
    expect(truck.getBrand()).toBe('Volvo');
  });

  it('should return correct model', () => {
    expect(truck.getModel()).toBe('FH16');
  });

  it('should return correct year', () => {
    expect(truck.getYear()).toBe(2022);
  });

  it('should return correct price', () => {
    expect(truck.getPrice()).toBe(50000);
  });
});
