import { ValueObject } from 'shared/ValueObject';

export interface IPlate {
  identifier: string;
}
export default class Plate extends ValueObject<IPlate> {}
