import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VehicleReadService } from './services/vehicle.service';
import { Vehicle } from './classes/vehicle';
import { AddVehicleComponent } from '../forms/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from '../forms/edit-vehicle/edit-vehicle.component';

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

  constructor(private vehicleService: VehicleReadService) {}

  async ngOnInit() {
    await this.vehicleService.load();
    this.vehicles = this.vehicleService.vehicles;
  }

  openAddForm() {
    this.showAddVehicleModal = !this.showAddVehicleModal;
  }
  addVehicle(vehicle: Vehicle) {
    console.log('Метод addVehicle() додав:', vehicle);
    this.vehicleService.addVehicle(vehicle);
    this.showAddVehicleModal = false;
  }

  openEditForm(i: number) {
    this.editIndex = i;
    this.showEditVehicleModal = !this.showEditVehicleModal;
  }
  editVehicle($event: any, i: number) {
    this.vehicleService.vehicles[i] = $event;
    this.showEditVehicleModal = false;
  }

  removeVehicle(vehicle: Vehicle) {
    console.log('Метод removeVehicle() видалив:', vehicle);
    this.vehicleService.removeVehicle(vehicle);
  }
}
