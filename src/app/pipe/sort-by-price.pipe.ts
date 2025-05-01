import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../solid/classes/vehicle';

@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  transform(vehicles: Vehicle[], sortDirection: 'asc' | 'desc'): Vehicle[] {
    if (!vehicles || vehicles.length === 0) return vehicles;

    return vehicles.sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.getPrice() - b.getPrice();
      } else {
        return b.getPrice() - a.getPrice();
      }
    });
  }
}
