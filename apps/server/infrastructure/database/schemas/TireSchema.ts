import { Tire, TireStatus } from '../packages/frontend/server/domain/entities/Tire';
import { TireModelSchema } from './TireModelSchema';
import { Schema } from '../../../shared/Schema';
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, ID } from 'type-graphql';

export interface ITireSchema {
  identifier: string;
  description: string;
  model: TireModelSchema;
  status: TireStatus;
}
@Entity()
@ObjectType()
export class TireSchema extends Schema<ITireSchema, Tire> {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;
  @Column({ type: 'varchar', length: 10, unique: true })
  @Field(() => String)
  identifier: string;
  @Column()
  @Field(() => String)
  description: string;
  @OneToOne(() => TireModelSchema)
  @Field(() => TireModelSchema)
  model: TireModelSchema;
  @Column({
    type: 'enum',
    enum: TireStatus,
  })
  @Field(() => String)
  status: TireStatus;

  static from(entity: Tire) {
    return new TireSchema({
      identifier: entity.identifier,
      description: entity.description,
      model: TireModelSchema.from(entity.model),
      status: entity.status,
    });
  }

  toEntity() {
    return Tire.create({
      identifier: this.identifier,
      description: this.description,
      model: this.model.toEntity().getValue(),
      status: this.status,
    });
  }
}
