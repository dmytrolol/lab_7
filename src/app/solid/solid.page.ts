import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VehicleReadService } from './services/vehicle.service';
import { Vehicle } from './classes/vehicle';
import { AddVehicleComponent } from '../forms/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from '../forms/edit-vehicle/edit-vehicle.component';

import { ConfigService } from './services/config.service';
import { vehicleType, VehicleType } from './classes/vehicle-types';

import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

import { CompareVehiclesComponent } from '../compare-vehicles/compare-vehicles.component';
import { SortByPricePipe } from '../pipe/sort-by-price.pipe';

@Component({
  selector: 'app-solid',
  templateUrl: './solid.page.html',
  styleUrls: ['./solid.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddVehicleComponent,
    EditVehicleComponent,
    CompareVehiclesComponent,
    SortByPricePipe,
  ],
})
export class SolidPage implements OnInit {
  showAddVehicleModal = false;
  showEditVehicleModal = false;
  editIndex = 0;
  vehicles: Vehicle[] = [];
  filteredVehicles: Vehicle[] = [];

  types = vehicleType;
  selectedType: VehicleType = this.types[0];
  selectedPriceRange = 100000;

  constructor(
    public vehicleService: VehicleReadService,
    private configService: ConfigService,
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.router.navigateByUrl('/login');
      return;
    }
    await this.vehicleService.load();
    this.vehicles = this.vehicleService.vehicles;
    this.applyFilters();
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  openAddForm() {
    this.showAddVehicleModal = !this.showAddVehicleModal;
  }

  async addVehicle(vehicle: Vehicle) {
    console.log('Метод addVehicle() додав:', vehicle);

    await this.vehicleService.addVehicle(vehicle);
    this.vehicles = this.vehicleService.vehicles;
    this.showAddVehicleModal = false;
    this.applyFilters();
  }

  openEditForm(i: number) {
    this.editIndex = i;
    this.showEditVehicleModal = !this.showEditVehicleModal;
  }

  async editVehicle($event: any, i: number) {
    const existingVehicleIndex = this.vehicles.findIndex(
      (v) => v.getID() === $event.id
    );
    if (existingVehicleIndex !== -1) {
      await this.vehicleService.editVehicle($event);
      console.log('Метод editVehicle() змінив ТЗ:', $event);
    } else {
      console.log('ТЗ не знайдено для оновлення');
    }
    this.showEditVehicleModal = false;
    this.applyFilters();
  }

  async removeVehicle(vehicle: Vehicle) {
    console.log('Метод removeVehicle() видалив:', vehicle);

    await this.vehicleService.removeVehicle(vehicle);
    this.vehicles = this.vehicleService.vehicles;
    this.applyFilters();
  }

  onChangeType(type: any) {
    if (!type) return; // Захист від undefined
    this.selectedType = type;
    this.configService.setType(type);
    this.applyFilters();
  }

  onChangePriceRange() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredVehicles = this.vehicles.filter((vehicle) => {
      return (
        vehicle.getType() === this.selectedType &&
        vehicle.getPrice() <= this.selectedPriceRange
      );
    });
  }

  showComparison = false;

  sortDirection: 'asc' | 'desc' = 'asc';

  sortByPrice() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.applyFilters();
  }
}
