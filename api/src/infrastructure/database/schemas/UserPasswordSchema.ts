import { UserPassword } from 'domain/entities/UserPassword';
import { Field, ID } from 'type-graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { UniqueEntityID } from 'shared/UniqueIdentity';
import { User } from 'domain/entities/User';
import { UserSchema } from './UserSchema';

export interface IUserPasswordSchema {
  user: UserSchema;
  password: string;
  active: boolean;
}

@Entity('UserPassword')
export class UserPasswordSchema implements IUserPasswordSchema {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => String)
  @Column()
  active: boolean;

  @ManyToOne(() => UserSchema, (user) => user.password)
  user: UserSchema;

  @RelationId((user: UserPasswordSchema) => user.user)
  userId: string;

  private constructor(props: IUserPasswordSchema, id?: string) {
    Object.assign(this, { ...props, id });
  }

  static from(entity: UserPassword, user: User) {
    return new UserPasswordSchema(
      {
        password: entity.password,
        active: entity.active,
        user: UserSchema.from(user),
      },
      entity.id
    );
  }

  toEntity() {
    return UserPassword.create(
      {
        password: this.password,
        active: this.active,
        userId: this.userId,
      },
      this.id
    );
  }
}
