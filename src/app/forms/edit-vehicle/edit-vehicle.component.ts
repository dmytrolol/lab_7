import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Vehicle } from 'src/app/solid/classes/vehicle';
import { FormBuilder } from '@angular/forms';
import { formConstructor } from '../formСonstructor';
import { VehicleFactory } from 'src/app/solid/classes/vehicle-factory';
import { vehicleType } from 'src/app/solid/classes/vehicle-types';
import { VehicleType } from 'src/app/solid/classes/vehicle-types';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, IonicModule],
  standalone: true,
})
export class EditVehicleComponent implements OnInit {
  @Input() vehicle!: Vehicle;
  @Output() vehicleEdit: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();
  vehicleForm!: FormGroup;
  types = vehicleType;
  currentType: VehicleType = vehicleType[0];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.vehicleForm = this.fb.group({
      id: [this.vehicle.getID()],
      type: [this.vehicle.getType()],
      brand: [this.vehicle.getBrand(), [Validators.required]],
      model: [this.vehicle.getModel(), [Validators.required]],
      year: [this.vehicle.getYear(), [Validators.required]],
      price: [this.vehicle.getPrice(), [Validators.required]],
    });

    formConstructor(this.vehicle.getType(), this.vehicleForm, this.fb);

    const allControls = Object.keys(this.vehicleForm.controls);
    const lastKey = allControls[allControls.length - 1];
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      const formData = this.vehicleForm.value;
      formData.type = this.currentType;

      const vehicle = VehicleFactory.createVehicle(formData);
      this.vehicleEdit.emit(vehicle);
      console.log('Form is valid');
    } else {
      this.vehicleForm.markAllAsTouched();
      console.error('Form is invalid');
    }
  }

  OnTypeChange(type: any): void {
    this.currentType = type as VehicleType;
    formConstructor(this.currentType, this.vehicleForm, this.fb);

    this.vehicleForm.get('type')?.setValue(this.currentType);
  }
}
