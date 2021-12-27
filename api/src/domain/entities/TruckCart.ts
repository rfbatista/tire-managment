import { Entity } from 'shared/Entity';
import { Tire } from './Tire';
import { TruckCartModel } from './TruckCartModel';

export interface ITruckCart{
	identifier: string;
	model?: TruckCartModel;
	tires?: Tire[]
}

export class TruckCart extends Entity<ITruckCart>{}