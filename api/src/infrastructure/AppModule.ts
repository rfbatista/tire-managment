import { Module } from '@nestjs/common';
import { ApiStatusController } from 'adapter/rest/Controllers/ApiStatusController';
import { TireController } from 'adapter/rest/Controllers/TireController';

@Module({
  imports: [],
  controllers: [TireController, ApiStatusController],
  providers: [],
})
export class AppModule {}
