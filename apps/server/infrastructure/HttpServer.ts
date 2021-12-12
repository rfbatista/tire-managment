import express from 'express';
import { AppConfig } from './AppConfig';
import { Logger } from './Logger';
import { createConnection, useContainer } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { Container } from 'typeorm-typedi-extensions';
import { registerDataSources } from './database/registerDataSources';

export class HttpServer {
  static async start() {
    const config = AppConfig.http;
    const app = express();
    app.listen(config.port, () => {
      Logger.info(`Express server running - PORT: ${config.port}`);
    });
  }
}
