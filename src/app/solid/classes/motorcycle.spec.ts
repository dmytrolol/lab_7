import { Motorcycle } from './motorcycle';

describe('Motorcycle', () => {
  let motorcycle: Motorcycle;

  beforeEach(() => {
    motorcycle = new Motorcycle('2', 15000, 'Yamaha', 'MT-07', 2021);
  });

  it('should create an instance', () => {
    expect(motorcycle).toBeTruthy();
    expect(motorcycle instanceof Motorcycle).toBeTrue();
  });

  it('should return "Motorcycle" as type', () => {
    expect(motorcycle.getType()).toBe('Motorcycle');
  });

  it('should return correct ID', () => {
    expect(motorcycle.getID()).toBe('2');
  });

  it('should return correct brand', () => {
    expect(motorcycle.getBrand()).toBe('Yamaha');
  });

  it('should return correct model', () => {
    expect(motorcycle.getModel()).toBe('MT-07');
  });

  it('should return correct year', () => {
    expect(motorcycle.getYear()).toBe(2021);
  });

  it('should return correct price', () => {
    expect(motorcycle.getPrice()).toBe(15000);
  });
});
