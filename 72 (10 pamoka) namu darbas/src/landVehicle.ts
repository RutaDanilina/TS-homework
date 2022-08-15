/* eslint-disable import/prefer-default-export */

import { Vehicle } from './vehicle.js';

export class LandVehicle extends Vehicle {
  private tires!: string[];

  constructor(brand: string, model: string, year: number, tires: string[]) {
    super(brand, model, year);
    this.tires = tires;
  }

  public override toString = (): string => `${this.getString()} tires is: ${this.tires}`;
}
