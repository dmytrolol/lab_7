import { FuelEfficiencyPipe } from './fuel-efficiency.pipe';

describe('FuelEfficiencyPipe', () => {
  const pipe = new FuelEfficiencyPipe();

  it('should return correct fuel efficiency for Car', () => {
    expect(pipe.transform('Car')).toBe('7.5 л/100 км');
  });

  it('should return correct fuel efficiency for Motorcycle', () => {
    expect(pipe.transform('Motorcycle')).toBe('4.0 л/100 км');
  });

  it('should return "Невідомо" for unknown type', () => {
    expect(pipe.transform('Plane')).toBe('Невідомо');
  });
});
