/* eslint-disable import/prefer-default-export */

import { Vehicle } from './vehicle.js';

export class WaterVehicle extends Vehicle {
  private maxDepth!: number;

  constructor(brand: string, model: string, year: number, maxDepth: number) {
    super(brand, model, year);
    this.maxDepth = maxDepth;
  }

  public override toString = (): string => `${this.getString()} max depth is: ${this.maxDepth}`;
}
