/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable import/prefer-default-export */

export class Vehicle {
  protected brand!: string;
  protected model!: string;
  protected year!: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  protected getString = (): string => `${this.brand} ${this.model} ${this.year}`;
}
