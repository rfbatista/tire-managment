import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ITireModel, TireModel } from 'domain/entities/TireModel';
import TireModelRepository from 'infrastructure/database/postgres/TireModelRepository';
import { getCustomRepository } from 'typeorm';

@Controller('tireModel')
export class TireModelController {
  private tireModelRepository;
  constructor() {
    this.tireModelRepository = getCustomRepository(TireModelRepository);
  }

  @Get('/search')
  async search(@Query('text') text) {
    const tireModels = await this.tireModelRepository.textSearch(text);
    return tireModels;
  }

  @Post('/')
  async create(@Body() tireModel: ITireModel) {
    const entity = TireModel.create(tireModel).getValue();
    const response = this.tireModelRepository.create(entity);
    return response;
  }

  @Put('/')
  async update() {}
}
