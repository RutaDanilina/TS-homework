/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable max-len */

import { WaterVehicle } from './waterVehicle.js';
import { LandVehicle } from './landVehicle.js';
import { AirVehicle } from './airVehicle.js';


const landVehicles: LandVehicle[] = [
  new LandVehicle('Toyota', 'Corola', 2005, ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']),
  new LandVehicle('Nisan', 'Qashqai', 2007, ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']),
];

const airVehicles: AirVehicle[] = [
  new AirVehicle('Jeti', 'Nitro', 2015, 7000),
  new AirVehicle('Falcon', 'Bamasi', 2012, 5000),
];


const waterVehicles: WaterVehicle[] = [
  new WaterVehicle('Sailor', 'Ocean 3000', 2011, 50),
  new WaterVehicle('LandScraper', 'Fagotti', 2002, 70),
];

landVehicles.forEach((l) => console.log(l.toString()));
airVehicles.forEach((a) => console.log(a.toString()));
waterVehicles.forEach((w) => console.log(w.toString()));


