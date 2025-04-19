import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { vehicleType } from '../solid/classes/vehicle-types';
export function formConstructor(
  type: string,
  vehicleForm: FormGroup,
  fb: FormBuilder
) {
  const controlsToRemove = ['price', 'brand', 'model', 'year'];
  controlsToRemove.forEach((control) => {
    if (vehicleForm.contains(control)) {
      vehicleForm.removeControl(control);
    }
  });
  if (
    type === vehicleType[0] ||
    type === vehicleType[1] ||
    type === vehicleType[2] ||
    type === vehicleType[3]
  ) {
    vehicleForm.addControl(
      'brand',
      fb.control('', [Validators.required, Validators.minLength(2)])
    );
    vehicleForm.addControl(
      'model',
      fb.control('', [Validators.required, Validators.minLength(2)])
    );
    vehicleForm.addControl(
      'year',
      fb.control(null, [Validators.required, Validators.min(1801)])
    );
    vehicleForm.addControl(
      'price',
      fb.control(null, [Validators.required, Validators.min(1)])
    );
  }
}
