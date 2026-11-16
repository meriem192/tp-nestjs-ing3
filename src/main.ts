import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  
const configService = app.get(ConfigService);
const port = Number(configService.get<String>('PORT'))

  await app.listen(port ?? 3000);
}
await bootstrap();
