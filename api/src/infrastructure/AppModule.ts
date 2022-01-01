import { Module } from '@nestjs/common';
import { ApiStatusController } from 'adapter/rest/Controllers/ApiStatusController';
import TireBrandController from 'adapter/rest/Controllers/TireBrandController';
import { TireController } from 'adapter/rest/Controllers/TireController';
import { TireModelController } from 'adapter/rest/Controllers/TireModelController';
import TireModelRepository from './database/postgres/TireModelRepository';
import { CreateTireUseCase } from '../application/usecase/Tire/CreateTireUseCase';
import TireRepository from './database/postgres/TireRepository';

@Module({
  imports: [],
  controllers: [
    TireController,
    ApiStatusController,
    TireModelController,
    TireBrandController,
  ],
  providers: [TireModelRepository, CreateTireUseCase, TireRepository],
})
export class AppModule {}
