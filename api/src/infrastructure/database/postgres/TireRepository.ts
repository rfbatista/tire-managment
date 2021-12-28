import { AbstractRepository, EntityRepository } from 'typeorm';
import { TireSchema } from '../schemas/TireSchema';
import { Service } from 'typedi';
import { Tire } from 'domain/entities/Tire';
import { TireBrandSchema } from '../schemas/TireBrandSchema';
@EntityRepository()
@Service()
export default class TireRepository extends AbstractRepository<TireSchema> {
  async save(tire: Tire) {
    const raw = TireSchema.from(tire);
    return this.manager.save(raw);
  }
}
