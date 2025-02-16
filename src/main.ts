import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';

async function bootstrap() {
  const server = express(); // Create an Express server
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(server); // On attache Express à NestJS
  await app.listen(3000);

  console.log(`🚀 Server NestJS start on http://localhost:3000`);
}
bootstrap();
