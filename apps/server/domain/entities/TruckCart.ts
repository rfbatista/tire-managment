import { Tire } from './Tire';
import { TruckCartModel } from './TruckCartModel';
import { Entity } from 'shared/Entity';

export interface ITruckCart{
	identifier: string;
	model?: TruckCartModel;
	tires?: Tire[]
}

export class TruckCart extends Entity<ITruckCart>{}