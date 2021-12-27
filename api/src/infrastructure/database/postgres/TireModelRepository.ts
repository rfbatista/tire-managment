import { AbstractRepository, EntityRepository } from 'typeorm';
import { TireModelSchema } from '../schemas/TireModelSchema';
import { Service } from 'typedi';

@EntityRepository()
@Service()
export default class TireModelRepository extends AbstractRepository<TireModelSchema> {}
