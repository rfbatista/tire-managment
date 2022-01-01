import { Result } from 'shared/Result';
import { Service } from 'typedi';
import TireRepository from 'infrastructure/database/postgres/TireRepository';
import { ITire, Tire, TireStatus } from 'domain/entities/Tire';
import { ApplicationOutput } from '../ApplicationOutput';
import { IUseCase } from '../IUseCase';
import { Injectable } from '@nestjs/common';
import { getCustomRepository } from 'typeorm';

export type CreateTireInput = ITire;

export type CreateTireOutput = ApplicationOutput<any>;

@Injectable()
export class CreateTireUseCase
  implements IUseCase<CreateTireInput, Promise<CreateTireOutput>>
{
  constructor() {}
  async execute(input: CreateTireInput): Promise<CreateTireOutput> {
		//TODO: REPO SHOULD BE INJECTED IN CLASS CONTRUCTION
		const tireRepo = getCustomRepository(TireRepository)
    const newTire = Tire.create(input);
    await tireRepo.create(newTire);
    return ApplicationOutput.ok();
  }
}
