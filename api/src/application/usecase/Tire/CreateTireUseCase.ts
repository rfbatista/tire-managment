import { Result } from 'shared/Result';
import { Service } from 'typedi';
import { UseCase } from 'shared/UseCase';
import TireRepository from 'infrastructure/database/postgres/TireRepository';

export type CreateTireInput = {};
export type CreateTireOutput = {};

@Service()
export class CreateTireUseCase
  implements UseCase<CreateTireInput, Promise<CreateTireOutput>>
{
	constructor(private tireRepo: TireRepository){}
  execute(input: CreateTireInput): Promise<Result<Promise<CreateTireOutput>>> {
    throw new Error('Method not implemented.');
  }
}
