import { Entity } from 'shared/Entity';
import { UniqueEntityID } from 'shared/UniqueIdentity';

export interface IUserPassword {
	userId: string;
  password: string;
  active: boolean;
}

export class UserPassword extends Entity<IUserPassword> {
  get password() {
    return this.props.password;
  }

  get active() {
    return this.props.active;
  }

  static create(props: IUserPassword, id?: string) {
    return new UserPassword(props, new UniqueEntityID(id));
  }
}
