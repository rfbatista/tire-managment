import { Entity } from 'shared/Entity';
import { UniqueEntityID } from 'shared/UniqueIdentity';

export interface ICompany {
  name: string;
  cnpj: any;
}

export class Company extends Entity<ICompany> {
  get name() {
    return this.props.name;
  }
  get cnpj() {
    return this.props.cnpj;
  }
  static create(props: ICompany, id?: string) {
    return new Company(props, new UniqueEntityID(id));
  }
}
