import { TireBrand } from '../packages/frontend/server/domain/entities/TireBrand';
import {
  AbstractRepository,
  EntityRepository,
  getCustomRepository,
  Repository,
} from 'typeorm';
import { TireBrandSchema } from '../schemas/TireBrandSchema';
import { Service } from 'typedi';

@EntityRepository()
@Service()
export default class TireBrandRepository extends AbstractRepository<TireBrandSchema> {
  async save(tireBrand: TireBrand) {
    const raw = TireBrandSchema.from(tireBrand);
    return this.manager.save(raw);
  }
}
