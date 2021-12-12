import { Identifier } from './Identifier';

export class UniqueEntityId extends Identifier<string | number> {
  constructor(id?: string | number) {
    super(id ? id : undefined);
  }
}
