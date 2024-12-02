import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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
  SwaggerModule.setup('api', app, document); // You can access Swagger docs at http://localhost:3000/api

  await app.listen(3000); 
}

bootstrap();
