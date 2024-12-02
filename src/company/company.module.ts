import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { PrismaService } from 'src/employee/prisma.service';  // Import PrismaService

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, PrismaService],
})
export class CompanyModule {}
