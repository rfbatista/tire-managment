import { Result } from 'shared/Result';
import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TireBrand } from '../../../domain/entities/TireBrand';
import { TireModel } from '../../../domain/entities/TireModel';

export interface ITireBrandSchema {
  name: string;
}

@Entity()
@ObjectType()
export class TireBrandSchema implements ITireBrandSchema {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @OneToMany(() => TireModel, (tireModel) => tireModel.brand)
  tireModel: TireModel;

  constructor(props: ITireBrandSchema, id?: number) {
    Object.assign(this, { ...props, id });
  }

  static from(entity: TireBrand) {
    return new TireBrandSchema(
      {
        name: entity.name,
      },
      Number(entity.id.toValue())
    );
  }

  toEntity(): Result<TireBrand> {
    const { id, ...props } = this;
    return TireBrand.create(props, id);
  }
}
