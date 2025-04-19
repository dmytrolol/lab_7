import { Car } from './car';

describe('Car', () => {
  let car: Car;

  beforeEach(() => {
    car = new Car(3, 25000, 'Toyota', 'Corolla', 2020);
  });

  it('should create an instance', () => {
    expect(car).toBeTruthy();
    expect(car instanceof Car).toBeTrue();
  });

  it('should return "Car" as type', () => {
    expect(car.getType()).toBe('Car');
  });

  it('should return correct ID', () => {
    expect(car.getID()).toBe(3);
  });

  it('should return correct brand', () => {
    expect(car.getBrand()).toBe('Toyota');
  });

  it('should return correct model', () => {
    expect(car.getModel()).toBe('Corolla');
  });

  it('should return correct year', () => {
    expect(car.getYear()).toBe(2020);
  });

  it('should return correct price', () => {
    expect(car.getPrice()).toBe(25000);
  });
});
