import { Entity } from 'shared/Entity';

export interface ITruckBrand {
  name: string;
}

export class TruckBrand extends Entity<ITruckBrand> {}
