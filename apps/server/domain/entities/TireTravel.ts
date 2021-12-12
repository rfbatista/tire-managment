import { Tire } from './Tire';

export interface ITireTravel {
  tires: Tire[];
  initialKm: number;
  finalKm: number;
  createdAt?: Date;
  deletedAt?: Date;
}
