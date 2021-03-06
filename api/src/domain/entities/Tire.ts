import { Entity } from 'shared/Entity';
import { UniqueEntityId } from 'shared/UniqueEntityId';
import { TireModel } from './TireModel';

export enum TireStatus {
  running = 'running',
  discarded = 'discarded',
  sold = 'sold',
  stock = 'stock',
}

export interface ITire {
  identifier: string;
  description: string;
  model?: TireModel;
  status: TireStatus;
}

export class Tire extends Entity<ITire> {
  get identifier() {
    return this.props.identifier;
  }
  get description() {
    return this.props.description;
  }
  get model() {
    return this.props.model;
  }
  get status() {
    return this.props.status;
  }
  static create(props: ITire, id?: number) {
    return id ? new Tire(props, new UniqueEntityId(id)) : new Tire(props);
  }
}
