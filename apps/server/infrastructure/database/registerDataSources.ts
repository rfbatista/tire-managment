import { buildSchema } from 'type-graphql';
import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import { TireBrandResolver } from './resolvers/TireBrandResolver';

export const registerDataSources = async () => {
  useContainer(Container);
  const connection = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5002,
    username: 'root',
    password: '123',
    database: 'postgres',
  });
  const schema = await buildSchema({ resolvers: [TireBrandResolver] });
};
