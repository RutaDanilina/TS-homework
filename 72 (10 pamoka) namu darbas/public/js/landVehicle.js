import { Vehicle } from './vehicle.js';
export class LandVehicle extends Vehicle {
    tires;
    constructor(brand, model, year, tires) {
        super(brand, model, year);
        this.tires = tires;
    }
    toString = () => `${this.getString()} tires is: ${this.tires}`;
}
//# sourceMappingURL=landVehicle.js.map