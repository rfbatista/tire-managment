import { UniqueEntityId } from 'shared/UniqueEntityId';
import { Entity } from '../../shared/BaseEntity';
import { UniqueEntityID } from '../../shared/UniqueIdentity';
export interface IUser {
  name: string;
  loginName: string;
  password: any;
}

export class User extends Entity<IUser> {
  get name() {
    return this.props.name;
  }
  get login() {
    return this.props.loginName;
  }

  get password() {
    return this.props.password;
  }
  static create(props: IUser, id?: number) {
    return new User(props, new UniqueEntityId(id));
  }
}
