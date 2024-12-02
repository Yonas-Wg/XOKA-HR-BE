import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import serverless from 'serverless-http';

let cachedHandler: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  // Set up Swagger API docs
  const config = new DocumentBuilder()
    .setTitle('HR Management API')
    .setDescription('HR Management System API Documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.init();
  return app.getHttpAdapter().getInstance();
}

// Serverless function handler
export const handler = async (event: any, context: any) => {
  if (!cachedHandler) {
    const appInstance = await bootstrap();
    cachedHandler = serverless(appInstance);
  }
  return cachedHandler(event, context);
};
