import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fuelEfficiency',
})
export class FuelEfficiencyPipe implements PipeTransform {
  transform(type: string): string {
    switch (type) {
      case 'Car':
        return '7.5 л/100 км';
      case 'Motorcycle':
        return '4.0 л/100 км';
      case 'Truck':
        return '15.0 л/100 км';
      case 'Boat':
        return '25.0 л/100 км';
      default:
        return 'Невідомо';
    }
  }
}
