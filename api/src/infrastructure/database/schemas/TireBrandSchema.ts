import { Result } from 'shared/Result';
import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TireBrand } from '../../../domain/entities/TireBrand';
import { TireModelSchema } from './TireModelSchema';

export interface ITireBrandSchema {
  name: string;
}

@Entity('TireBrand')
@ObjectType()
export class TireBrandSchema implements ITireBrandSchema {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @OneToMany(() => TireModelSchema, (tireModel) => tireModel.brand)
  tireModel: TireModelSchema;

  constructor(props: ITireBrandSchema, id?: string) {
    Object.assign(this, { ...props, id });
  }

  static from(entity: TireBrand) {
    return new TireBrandSchema(
      {
        name: entity.name,
      },
      String(entity.id.toValue())
    );
  }

  toEntity(): Result<TireBrand> {
    const { id, ...props } = this;
    return TireBrand.create(props, id);
  }
}
