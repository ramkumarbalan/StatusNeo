import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist: true}))
  app.setGlobalPrefix('api')
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(process.env.PORT || 80, () => {
    Logger.log('Application is running on port => ' + process.env.PORT)
  });
}
bootstrap();
