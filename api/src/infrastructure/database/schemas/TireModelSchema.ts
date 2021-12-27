import { TireModel } from 'domain/entities/TireModel';
import { Schema } from 'shared/Schema';
import { Field, ObjectType, ID } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TireBrandSchema } from './TireBrandSchema';

export interface ITireModelSchema {
  brand: TireBrandSchema;
  description?: string;
}

@Entity('TireModel')
@ObjectType()
export class TireModelSchema extends Schema<ITireModelSchema, TireModel> {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;
  @Field(() => String)
  @Column()
  description?: string;
  @ManyToOne(() => TireBrandSchema, (tireBrand) => tireBrand.tireModel)
  @Field(() => TireBrandSchema)
  brand: TireBrandSchema;

  static from(entity: TireModel) {
    return new TireModelSchema(
      {
        brand: TireBrandSchema.from(entity.brand),
        description: entity.description,
      },
      String(entity.id.toValue())
    );
  }

  toEntity() {
    return TireModel.create(
      {
        brand: this.brand.toEntity().getValue(),
        description: this.description,
      },
      this.id
    );
  }
}
