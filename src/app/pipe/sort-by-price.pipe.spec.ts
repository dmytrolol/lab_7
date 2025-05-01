import { SortByPricePipe } from './sort-by-price.pipe';
import { Car } from './../solid/classes/car';
import { Truck } from '../solid/classes/truck';
import { Boat } from './../solid/classes/boat';

describe('SortByPricePipe', () => {
  let pipe: SortByPricePipe;

  beforeEach(() => {
    pipe = new SortByPricePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort cars by price in ascending order', () => {
    const car1 = new Car('1', 20000, 'Toyota', 'Corolla', 2020);
    const car2 = new Car('2', 30000, 'Ford', 'Focus', 2021);
    const car3 = new Car('3', 25000, 'Honda', 'Civic', 2022);

    const vehicles = [car1, car2, car3];
    const sorted = pipe.transform(vehicles, 'asc');

    expect(sorted[0].getPrice()).toBe(20000);
    expect(sorted[1].getPrice()).toBe(25000);
    expect(sorted[2].getPrice()).toBe(30000);
  });

  it('should sort cars by price in descending order', () => {
    const car1 = new Car('1', 20000, 'Toyota', 'Corolla', 2020);
    const car2 = new Car('2', 30000, 'Ford', 'Focus', 2021);
    const car3 = new Car('3', 25000, 'Honda', 'Civic', 2022);

    const vehicles = [car1, car2, car3];
    const sorted = pipe.transform(vehicles, 'desc');

    expect(sorted[0].getPrice()).toBe(30000);
    expect(sorted[1].getPrice()).toBe(25000);
    expect(sorted[2].getPrice()).toBe(20000);
  });

  it('should handle empty vehicle list', () => {
    const vehicles: any[] = [];
    const sorted = pipe.transform(vehicles, 'asc');
    expect(sorted).toEqual([]);
  });

  it('should handle list with one vehicle', () => {
    const car1 = new Car('1', 20000, 'Toyota', 'Corolla', 2020);
    const vehicles = [car1];
    const sorted = pipe.transform(vehicles, 'asc');
    expect(sorted.length).toBe(1);
    expect(sorted[0].getPrice()).toBe(20000);
  });

  it('should sort trucks by price in ascending order', () => {
    const truck1 = new Truck('1', 50000, 'Volvo', 'FH', 2021);
    const truck2 = new Truck('2', 40000, 'Scania', 'R450', 2020);
    const truck3 = new Truck('3', 60000, 'Mercedes', 'Actros', 2022);

    const vehicles = [truck1, truck2, truck3];
    const sorted = pipe.transform(vehicles, 'asc');

    expect(sorted[0].getPrice()).toBe(40000);
    expect(sorted[1].getPrice()).toBe(50000);
    expect(sorted[2].getPrice()).toBe(60000);
  });

  it('should sort boats by price in descending order', () => {
    const boat1 = new Boat('1', 20000, 'Yamaha', '242X', 2020);
    const boat2 = new Boat('2', 35000, 'Sea Ray', 'SLX', 2021);
    const boat3 = new Boat('3', 50000, 'MasterCraft', 'XStar', 2022);

    const vehicles = [boat1, boat2, boat3];
    const sorted = pipe.transform(vehicles, 'desc');

    expect(sorted[0].getPrice()).toBe(50000);
    expect(sorted[1].getPrice()).toBe(35000);
    expect(sorted[2].getPrice()).toBe(20000);
  });
});
