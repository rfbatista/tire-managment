import { Controller, Get } from '@nestjs/common';

@Controller('status')
export class ApiStatusController {
  @Get()
  status(): string {
    return 'Is online 2DSasdasd2';
  }
}
