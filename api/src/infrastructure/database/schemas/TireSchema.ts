import { TireModelSchema } from './TireModelSchema';
import { Schema } from '../../../shared/Schema';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Field, ObjectType, ID } from 'type-graphql';
import { Tire, TireStatus } from 'domain/entities/Tire';
import { CompanySchema } from './CompanySchema';

export interface ITireSchema {
  identifier: string;
  description: string;
  model: TireModelSchema;
  status: TireStatus;
}
@Entity('Tire')
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
  @ManyToMany(() => TireModelSchema)
  @Field(() => TireModelSchema)
  model: TireModelSchema;
  @Column({
    type: 'enum',
    enum: TireStatus,
  })
  @Field(() => String)
  status: TireStatus;

  @RelationId((tire: TireSchema) => tire.company)
  companyId: string;

  @ManyToOne(() => CompanySchema)
  company: CompanySchema;

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
