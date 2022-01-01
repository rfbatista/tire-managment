import { Injectable } from '@nestjs/common';
import { Result } from 'shared/Result';
import { UseCase } from '../../../shared/UseCase';

export type SearchTireModelInput = {};

export type SearchTireModelOutput = {};

@Injectable()
export class SearchTireModelUseCase
  implements UseCase<SearchTireModelInput, Promise<SearchTireModelOutput>>
{
  execute(
    input: SearchTireModelInput
  ): Promise<Result<Promise<SearchTireModelOutput>>> {
    throw new Error('Method not implemented.');
  }
}
