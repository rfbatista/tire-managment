import { Entity } from 'shared/Entity';
import { Result } from 'shared/Result';
import { UniqueEntityID } from 'shared/UniqueIdentity';
import { TireBrand } from './TireBrand';

export interface ITireModel {
  name: string;
  brand: TireBrand;
  description?: string;
}

export class TireModel extends Entity<ITireModel> {
  get brand(): TireBrand {
    return this.props.brand;
  }
  get name() {
    return this.props.name;
  }
  get description(): string | undefined {
    return this.props?.description;
  }
  static create(props: ITireModel, id?: string): Result<TireModel> {
    const brand = props.brand
      ? TireBrand.create(props.brand, props.brand?.id).getValue()
      : null;
    return Result.ok(
      new TireModel({ ...props, brand }, new UniqueEntityID(id))
    );
  }
}
