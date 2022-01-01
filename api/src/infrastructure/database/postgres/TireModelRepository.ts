import { AbstractRepository, EntityRepository } from 'typeorm';
import { TireModelSchema } from '../schemas/TireModelSchema';
import { Injectable } from '@nestjs/common';
import { Service } from 'typedi';
import { TireModel } from 'domain/entities/TireModel';

@EntityRepository(TireModelSchema)
@Service()
export default class TireModelRepository extends AbstractRepository<TireModelSchema> {
  async create(entity: TireModel) {
    const schema = TireModelSchema.from(entity);
    return this.repository.save(schema);
  }

  async textSearch(text: string) {
    return this.repository
      .createQueryBuilder('TireModel')
      .leftJoinAndSelect('TireModel.brand', 'TireBrand')
      .where('TireModel.name like :name', { name: `%${text}%` })
      .orWhere('TireBrand.name like :name', { name: `%${text}%` })
      .getMany();
  }
}
