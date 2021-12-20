import { Query, Resolver } from 'type-graphql';
import { TireBrandSchema } from '../schemas/TireBrandSchema';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';

@Resolver(() => TireBrandSchema)
export class TireBrandResolver {
  constructor(
    @InjectRepository(TireBrandSchema)
    private readonly tireBrandRepository: Repository<TireBrandSchema>
  ) {}

  @Query(() => [TireBrandSchema], { nullable: true })
  tireBrands() {
    return this.tireBrandRepository.find();
  }
}
