/* eslint-disable import/prefer-default-export */

import { Vehicle } from './vehicle.js';

export class AirVehicle extends Vehicle {
  private maxAltitude!: number;

  constructor(brand: string, model: string, year: number, maxAltitude: number) {
    super(brand, model, year);
    this.maxAltitude = maxAltitude;
  }

  public override toString = (): string => `${this.getString()} max altitude is: ${this.maxAltitude}`;
}
