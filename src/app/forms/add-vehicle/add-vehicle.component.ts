import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { vehicleType, VehicleType } from '../../solid/classes/vehicle-types';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleFactory } from '../../solid/classes/vehicle-factory';
import { formConstructor } from '../formСonstructor';
import { Vehicle } from 'src/app/solid/classes/vehicle';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, IonicModule],
  standalone: true,
})
export class AddVehicleComponent implements OnInit {
  vehicleForm: FormGroup;
  currentType: VehicleType = vehicleType[0];
  types = vehicleType;

  @Output() vehicleAdd: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

  constructor(private fb: FormBuilder) {
    this.vehicleForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      type: [this.currentType, Validators.required],
      brand: ['', [Validators.required, Validators.minLength(1)]],
      model: ['', [Validators.required, Validators.minLength(1)]],
      year: [0, [Validators.required, Validators.min(1800)]],
      price: [0, [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit() {
    this.OnTypeChange(this.currentType);
  }

  OnTypeChange(type: any): void {
    this.currentType = type as VehicleType;
    formConstructor(this.currentType, this.vehicleForm, this.fb);
  }

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      const formData = this.vehicleForm.value;
      formData.type = this.currentType;
      const vehicle = VehicleFactory.createVehicle(formData);
      this.vehicleAdd.emit(vehicle);
      console.log('Form is valid');
    } else {
      this.vehicleForm.markAllAsTouched();
      console.error('Form is invalid');
    }
  }
}
