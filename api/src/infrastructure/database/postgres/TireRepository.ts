import { AbstractRepository, EntityRepository } from 'typeorm';
import { TireSchema } from '../schemas/TireSchema';
import { Tire } from 'domain/entities/Tire';
import { Injectable } from '@nestjs/common';
@EntityRepository()
@Injectable()
export default class TireRepository extends AbstractRepository<TireSchema> {
  async save(tire: Tire) {
    const raw = TireSchema.from(tire);
    return this.manager.save(raw);
  }
}
