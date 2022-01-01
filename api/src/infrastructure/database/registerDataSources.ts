import { Logger } from 'infrastructure/Logger';
import { buildSchema } from 'type-graphql';
import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import { AppConfig } from '../AppConfig';
import { TireBrandResolver } from './resolvers/TireBrandResolver';
import { CompanySchema } from './schemas/CompanySchema';
import { TireBrandSchema } from './schemas/TireBrandSchema';
import { TireModelSchema } from './schemas/TireModelSchema';
import { TireSchema } from './schemas/TireSchema';
import { TireRemodelingSchema } from './schemas/TireRemodelingSchema';
import { UserPasswordSchema } from './schemas/UserPasswordSchema';
import { UserSchema } from './schemas/UserSchema';

export const registerDataSources = async () => {
  useContainer(Container);
  await createConnection({
    type: 'postgres',
    host: AppConfig.datasource.database.postgres.dbhost,
    port: Number(AppConfig.datasource.database.postgres.dbport),
    username: AppConfig.datasource.database.postgres.dbuser,
    password: AppConfig.datasource.database.postgres.dbpassword,
    database: AppConfig.datasource.database.postgres.dbname,
    entities: [
      TireSchema,
      TireModelSchema,
      TireBrandSchema,
      CompanySchema,
      TireRemodelingSchema,
      UserPasswordSchema,
      UserSchema,
    ],
    logging: false,
		synchronize: true,
    migrations: ['../migrations/**/*.ts'],
    cli: {
      entitiesDir: 'src/infrastructure/database/schemas',
      migrationsDir: 'migration',
    },
  })
    .then(async () => {
      Logger.info('Connected to database');
      await buildSchema({ resolvers: [TireBrandResolver] });
    })
    .catch((error) =>
      Logger.error(`Error trying to connect in database: ${error}`)
    );
};
