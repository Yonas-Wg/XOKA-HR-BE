// src/salary/salary.module.ts
import { Module } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';
import { PrismaService } from 'src/employee/prisma.service';

@Module({
  imports: [],
  providers: [SalaryService, PrismaService],
  controllers: [SalaryController],
})
export class SalaryModule {}
