import { Company } from 'domain/entities/Company';
import { Field, ID } from 'type-graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Schema } from '../../../shared/Schema';
export interface ICompanySchema {
  name: string;
  cnpj: string;
}

export class CompanySchema extends Schema<ICompanySchema, Company> {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;
	
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  cnpj: string;

  static from(entity: Company) {
    return new CompanySchema(
      {
        name: entity.name,
        cnpj: entity.cnpj,
      },
      String(entity.id.toValue())
    );
  }

  toEntity() {
    return Company.create(
      {
        name: this.name,
        cnpj: this.cnpj,
      },
      this.id
    );
  }
}
