import { Logger } from 'infrastructure/Logger';
import { buildSchema } from 'type-graphql';
import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import { AppConfig } from '../AppConfig';
import { TireBrandResolver } from './resolvers/TireBrandResolver';

export const registerDataSources = async () => {
  useContainer(Container);
  createConnection({
    type: 'postgres',
    host: AppConfig.datasource.database.postgres.dbhost,
    port: Number(AppConfig.datasource.database.postgres.dbport),
    username: AppConfig.datasource.database.postgres.dbuser,
    password: AppConfig.datasource.database.postgres.dbpassword,
    database: AppConfig.datasource.database.postgres.dbname,
    entities: ['src/infrastructure/database/schemas/*.ts'],
    logging: false,
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
    .catch(() => Logger.error('Error trying to connect in database'));
};
