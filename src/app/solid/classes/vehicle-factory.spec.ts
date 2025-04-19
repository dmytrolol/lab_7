// import { VehicleFactory } from './vehicle-factory';
// import { Car } from './car';
// import { Truck } from './truck';
// import { Motorcycle } from './motorcycle';
// import { Boat } from './boat';
// import { vehicleType } from './vehicle-types';

// describe('VehicleFactory', () => {
//   it('should create a Car', () => {
//     const vehicle = VehicleFactory.createVehicle({
//       type: vehicleType[0],
//       id: 1,
//       price: 15000,
//       brand: 'Toyota',
//       model: 'Corolla',
//       year: 2020,
//     });

//     expect(vehicle).toBeInstanceOf(Car);
//     expect(vehicle.getID()).toBe(1);
//     expect(vehicle.getPrice()).toBe(15000);
//     expect(vehicle.getBrand()).toBe('Toyota');
//     expect(vehicle.getModel()).toBe('Corolla');
//     expect(vehicle.getYear()).toBe(2020);
//     expect(vehicle.getType()).toBe('Car');
//   });

//   it('should create a Truck', () => {
//     const vehicle = VehicleFactory.createVehicle({
//       type: vehicleType[1],
//       id: 2,
//       price: 30000,
//       brand: 'Volvo',
//       model: 'FH',
//       year: 2022,
//     });

//     expect(vehicle).toBeInstanceOf(Truck);
//     expect(vehicle.getType()).toBe('Truck');
//   });

//   it('should create a Motorcycle', () => {
//     const vehicle = VehicleFactory.createVehicle({
//       type: vehicleType[2],
//       id: 3,
//       price: 8000,
//       brand: 'Honda',
//       model: 'CBR600RR',
//       year: 2019,
//     });

//     expect(vehicle).toBeInstanceOf(Motorcycle);
//     expect(vehicle.getType()).toBe('Motorcycle');
//   });

//   it('should create a Boat', () => {
//     const vehicle = VehicleFactory.createVehicle({
//       type: vehicleType[3],
//       id: 4,
//       price: 50000,
//       brand: 'Yamaha',
//       model: '242X',
//       year: 2021,
//     });

//     expect(vehicle).toBeInstanceOf(Boat);
//     expect(vehicle.getType()).toBe('Boat');
//   });

//   it('should throw an error for unknown type', () => {
//     expect(() =>
//       VehicleFactory.createVehicle({
//         type: 'Spaceship',
//         id: 5,
//         price: 999999,
//         brand: 'SpaceY',
//         model: 'StarCruiser',
//         year: 2030,
//       })
//     ).toThrowError('Невідомий тип транспорту: Spaceship');
//   });
// });
