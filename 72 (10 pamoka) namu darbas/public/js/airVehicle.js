import { Vehicle } from './vehicle.js';
export class AirVehicle extends Vehicle {
    maxAltitude;
    constructor(brand, model, year, maxAltitude) {
        super(brand, model, year);
        this.maxAltitude = maxAltitude;
    }
    toString = () => `${this.getString()} max altitude is: ${this.maxAltitude}`;
}
//# sourceMappingURL=airVehicle.js.map