import { Result } from 'shared/Result';
import { Service } from 'typedi';
import TireRepository from 'infrastructure/database/postgres/TireRepository';
import { Tire, TireStatus } from 'domain/entities/Tire';
import { ApplicationOutput } from '../ApplicationOutput';
import { IUseCase } from '../IUseCase';
import { Injectable } from '@nestjs/common';

export type CreateTireInput = {
  identification: string;
  modelId: string;
  status: TireStatus;
  description: string;
};
export type CreateTireOutput = ApplicationOutput<any>;

@Injectable()
export class CreateTireUseCase
  implements IUseCase<CreateTireInput, Promise<CreateTireOutput>>
{
  constructor(private tireRepo: TireRepository) {}
  async execute(input: CreateTireInput): Promise<CreateTireOutput> {
    const { identification, modelId, status, description } = input;
    const newTire = Tire.create({
      identifier: identification,
      status: status,
      description: description,
    });
    await this.tireRepo.save(newTire);
    return ApplicationOutput.ok();
  }
}
