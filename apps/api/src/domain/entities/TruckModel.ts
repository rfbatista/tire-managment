import { Entity } from 'shared/Entity';
import { TruckBrand } from './TruckBrand';

export interface ITruckModel {
  name?: string;
  brand: TruckBrand;
  wheels: number;
}

export class TruckModel extends Entity<ITruckModel> {}
