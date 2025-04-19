import { Boat } from './boat';

describe('Boat', () => {
  let boat: Boat;

  beforeEach(() => {
    boat = new Boat(4, 100000, 'Yamaha', 'WaveRunner', 2021);
  });

  it('should create an instance', () => {
    expect(boat).toBeTruthy();
    expect(boat instanceof Boat).toBeTrue();
  });

  it('should return "Boat" as type', () => {
    expect(boat.getType()).toBe('Boat');
  });

  it('should return correct ID', () => {
    expect(boat.getID()).toBe(4);
  });

  it('should return correct brand', () => {
    expect(boat.getBrand()).toBe('Yamaha');
  });

  it('should return correct model', () => {
    expect(boat.getModel()).toBe('WaveRunner');
  });

  it('should return correct year', () => {
    expect(boat.getYear()).toBe(2021);
  });

  it('should return correct price', () => {
    expect(boat.getPrice()).toBe(100000);
  });
});
