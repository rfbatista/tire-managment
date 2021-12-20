import { buildSchema } from 'type-graphql';
import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import { AppConfig } from '../AppConfig';
import { TireBrandResolver } from './resolvers/TireBrandResolver';
import { TireBrandSchema } from './schemas/TireBrandSchema';
import { TireModelSchema } from './schemas/TireModelSchema';
import { TireRemodelingSchema } from './schemas/TireRemodelingSchema';
import { TireSchema } from './schemas/TireSchema';

export const registerDataSources = async () => {
  useContainer(Container);
  const connection = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: AppConfig.datasource.database.postgres.dbuser,
    password: AppConfig.datasource.database.postgres.dbpassword,
    database: AppConfig.datasource.database.postgres.dbname,
    migrations: ['src/migration/**/*.ts'],
    entities: [
      TireBrandSchema,
      TireModelSchema,
      TireRemodelingSchema,
      TireSchema,
    ],
  });
  const schema = await buildSchema({ resolvers: [TireBrandResolver] });
};
