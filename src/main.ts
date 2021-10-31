import { initSwagger } from './app.swagger';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  const port = 3000;
  const logger = new Logger();
  logger.log('Servidor corriendo en el puerto ' + port);
  app.enableCors({ origin: 'http://localhost:4200' });
  await app.listen(port);
}
bootstrap();
