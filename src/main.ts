import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
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
  app.use(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
