import { Body, Controller, Post } from '@nestjs/common';
import { CreateTireUseCase } from 'application/usecase/Tire/CreateTireUseCase';
import { ITire, Tire } from 'domain/entities/Tire';
import { Router } from 'express';
import TireRepository from 'infrastructure/database/postgres/TireRepository';
import { getCustomRepository } from 'typeorm';

@Controller('tire')
export class TireController {
  private repository: any;
  constructor(private createTireUseCase: CreateTireUseCase) {}

  @Post('/')
  async create(@Body() tire: ITire) {
    const output = await this.createTireUseCase.execute(tire);
    return output.getValue();
  }
}
