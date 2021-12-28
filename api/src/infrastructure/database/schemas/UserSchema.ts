import { User } from 'domain/entities/User';
import { Field, ID } from 'type-graphql';
import { Column, PrimaryGeneratedColumn, OneToMany, Entity } from 'typeorm';
import { UserPasswordSchema } from './UserPasswordSchema';

export interface IUserSchema {
  name: string;
}

@Entity('User')
export class UserSchema implements IUserSchema {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @OneToMany(() => UserPasswordSchema, (userPassword) => userPassword.user, {
    orphanedRowAction: 'delete',
  })
  password: UserPasswordSchema;

  private constructor(props: IUserSchema, id?: string) {
    Object.assign(this, { ...props, id });
  }

  static from(entity: User) {
    return new UserSchema({ name: entity.name }, entity.id.toString());
  }
}
