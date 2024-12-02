import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import serverless from 'serverless-http';

let cachedHandler: any; // Caching the handler for re-use in serverless environments

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for your frontend domain
  app.enableCors({
    origin: 'https://xoka-hr-management.vercel.app',
    methods: 'GET, POST, PUT, DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type, Accept', // Allowed headers
  });

  // Configure Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description for HR-Management-System application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger docs available at /api

  await app.init();
  return app.getHttpAdapter().getInstance();
}

export const handler = async (event: any, context: any) => {
  if (!cachedHandler) {
    const appInstance = await bootstrap();
    cachedHandler = serverless(appInstance);
  }
  return cachedHandler(event, context);
};
