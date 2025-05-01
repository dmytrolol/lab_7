import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../solid/classes/vehicle';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FuelEfficiencyPipe } from '../pipe/fuel-efficiency.pipe';

@Component({
  selector: 'app-compare-vehicles',
  templateUrl: './compare-vehicles.component.html',
  styleUrls: ['./compare-vehicles.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, FuelEfficiencyPipe],
})
export class CompareVehiclesComponent implements OnInit {
  constructor() {}

  @Input() vehicles: Vehicle[] = [];

  vehicleTypes: string[] = [];

  ngOnInit() {
    this.vehicleTypes = [...new Set(this.vehicles.map((v) => v.getType()))];
  }

  selectedType: string = '';
  filteredVehicles: Vehicle[] = [];

  selected1?: Vehicle;
  selected2?: Vehicle;

  onTypeChange() {
    this.filteredVehicles = this.vehicles.filter(
      (v) => v.getType() === this.selectedType
    );
    this.selected1 = undefined;
    this.selected2 = undefined;
  }
}
