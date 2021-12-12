import { AbstractRepository, EntityRepository } from 'typeorm';
import { TireSchema } from '../schemas/TireSchema';
import { Service } from 'typedi';
@EntityRepository()
@Service()
export default class TireRepository extends AbstractRepository<TireSchema>{} 