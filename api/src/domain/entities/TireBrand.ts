import { Entity } from 'shared/Entity';
import { Result } from 'shared/Result';
import { UniqueEntityID } from '../../shared/UniqueIdentity';

export interface ITireBrand {
  name: string;
}

export class TireBrand extends Entity<ITireBrand> {
  get name() {
    return this.props.name;
  }

  static create(props: ITireBrand, id: string): Result<TireBrand> {
    return Result.ok(new TireBrand(props, new UniqueEntityID(id)));
  }
}
