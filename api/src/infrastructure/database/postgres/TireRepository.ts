import { AbstractRepository, EntityRepository } from 'typeorm';
import { TireSchema } from '../schemas/TireSchema';
import { Tire } from 'domain/entities/Tire';
import { Injectable } from '@nestjs/common';
@EntityRepository(TireSchema)
@Injectable()
export default class TireRepository extends AbstractRepository<TireSchema> {
  async create(tire: Tire) {
    const raw = TireSchema.from(tire);
    return this.repository.save(raw);
  }
}
