import { Entity } from 'shared/Entity';
import { Result } from 'shared/Result';
import { UniqueEntityID } from 'shared/UniqueIdentity';
import { TireBrand } from './TireBrand';

export interface ITireModel {
  brand: TireBrand;
  description?: string;
}

export class TireModel extends Entity<ITireModel> {
  get brand(): TireBrand {
    return this.props.brand;
  }
  get description(): string | undefined {
    return this.props?.description;
  }
  static create(props: ITireModel, id?: string): Result<TireModel> {
    return Result.ok(new TireModel(props, new UniqueEntityID(id)));
  }
}
