import { Controller, Get } from '@nestjs/common';
import TireBrandRepository from 'infrastructure/database/postgres/TireBrandRepository';
import { getCustomRepository } from 'typeorm';

@Controller('tireBrand')
export default class TireBrandController {
  private repository: TireBrandRepository;
  constructor() {
    this.repository = getCustomRepository(TireBrandRepository);
  }

	@Get('/')
	getAll(){
		return this.repository.getAll()
	}

}
