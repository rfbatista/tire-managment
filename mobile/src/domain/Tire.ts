import 'react-native-get-random-values';
import { customAlphabet } from 'nanoid';
import { ITireModel } from './TireModel';

export enum TireStatusEnum {
  running = 'running',
  discarded = 'discarded',
  sold = 'sold',
  stock = 'stock',
}

export interface ITire {
	id?: string;
  identifier: string;
  model: ITireModel;
  status: TireStatusEnum;
  description: string;
}

export class Tire {
  static generateIdentification(): string {
    const letters = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 3);
    const numbers = customAlphabet('0123456789', 4);
    return letters() + numbers();
  }
}
