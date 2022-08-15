import { Vehicle } from './vehicle.js';
export class WaterVehicle extends Vehicle {
    maxDepth;
    constructor(brand, model, year, maxDepth) {
        super(brand, model, year);
        this.maxDepth = maxDepth;
    }
    toString = () => `${this.getString()} max depth is: ${this.maxDepth}`;
}
//# sourceMappingURL=waterVehicle.js.map