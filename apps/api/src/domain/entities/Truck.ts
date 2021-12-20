import { Entity } from 'shared/Entity';
import Plate from './Plate';
import { Tire } from './Tire';
import { TruckModel } from './TruckModel';

export interface ITruck {
  identity: string;
  plate: Plate;
  model: TruckModel;
  tires: Tire[];
}

export class Truck extends Entity<ITruck>{}