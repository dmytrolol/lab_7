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
    private configService: ConfigService
  ) {}

  async ngOnInit() {
    await this.vehicleService.load();
    this.vehicles = this.vehicleService.vehicles;
    this.applyFilters(); // Застосовуємо фільтри після завантаження
  }

  openAddForm() {
    this.showAddVehicleModal = !this.showAddVehicleModal;
  }

  addVehicle(vehicle: Vehicle) {
    console.log('Метод addVehicle() додав:', vehicle);
    this.vehicleService.addVehicle(vehicle);
    this.showAddVehicleModal = false;
    this.applyFilters();
  }

  openEditForm(i: number) {
    this.editIndex = i;
    this.showEditVehicleModal = !this.showEditVehicleModal;
  }

  editVehicle($event: any, i: number) {
    // Оновлюємо ТЗ, перевіряючи ID
    const existingVehicleIndex = this.vehicles.findIndex(
      (v) => v.getID() === $event.id
    );
    if (existingVehicleIndex !== -1) {
      this.vehicles[existingVehicleIndex] = $event;
      console.log('Метод editVehicle() змінив ТЗ:', $event);
    } else {
      console.log('ТЗ не знайдено для оновлення');
    }
    this.showEditVehicleModal = false;
    this.applyFilters();
  }

  removeVehicle(vehicle: Vehicle) {
    console.log('Метод removeVehicle() видалив:', vehicle);
    this.vehicleService.removeVehicle(vehicle);
    this.applyFilters();
  }

  onChangeType(type: any) {
    if (!type) return; // Захист від undefined
    this.selectedType = type;
    this.configService.setType(type);
    this.applyFilters();
  }

  onChangePriceRange() {
    this.applyFilters(); // Зміна діапазону ціни викликає фільтрацію
  }

  applyFilters() {
    this.filteredVehicles = this.vehicles.filter((vehicle) => {
      // Фільтрація за типом та ціною
      return (
        vehicle.getType() === this.selectedType &&
        vehicle.getPrice() <= this.selectedPriceRange
      );
    });
  }
}
