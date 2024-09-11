import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as expressBasicAuth from 'express-basic-auth';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.KAFKA,
  //     options: {
  //       client: {
  //         brokers: [process.env.KAFKA_BROKER],
  //       },
  //       consumer: {
  //         groupId: process.env.KAFKA_GROUP_ID,
  //       },
  //     },
  //   },
  // );
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());

  app.use(
    ['/api', '/api-json'],
    expressBasicAuth({
      challenge: true,
      users: { root: 'root' },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Micro Service')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
