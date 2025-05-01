import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompareVehiclesComponent } from './compare-vehicles.component';

describe('CompareVehiclesComponent', () => {
  let component: CompareVehiclesComponent;
  let fixture: ComponentFixture<CompareVehiclesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), CompareVehiclesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompareVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
