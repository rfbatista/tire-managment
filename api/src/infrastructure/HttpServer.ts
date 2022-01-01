import express from 'express';
import { AppConfig } from './AppConfig';
import { Logger } from './Logger';
import { registerDataSources } from './database/registerDataSources';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import morgan from 'morgan';

export class HttpServer {
  static async start() {
    await registerDataSources();
    const config = AppConfig.http;
    const app = await NestFactory.create(AppModule);
		app.use(morgan('tiny'));
    app.listen(config.port, () => {
      Logger.info(`Express server running - PORT: ${config.port}`);
    });
  }
}
