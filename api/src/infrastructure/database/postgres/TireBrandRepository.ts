import { AbstractRepository, EntityRepository } from 'typeorm';
import { TireBrandSchema } from '../schemas/TireBrandSchema';
import { Service } from 'typedi';
import { TireBrand } from 'domain/entities/TireBrand';

@EntityRepository(TireBrandSchema)
@Service()
export default class TireBrandRepository extends AbstractRepository<TireBrandSchema> {
  async save(tireBrand: TireBrand) {
    const raw = TireBrandSchema.from(tireBrand);
    return this.manager.save(raw);
  }
  async getAll() {
    return this.repository.find();
  }
}
