import { Entity } from 'shared/Entity';
import { TruckCartBrand } from './TruckCartBrand';

export interface ITruckCartModel{
	brand?: TruckCartBrand;
	wheels: number;
}

export class TruckCartModel extends Entity<ITruckCartModel>{}