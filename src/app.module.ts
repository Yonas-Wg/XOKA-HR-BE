// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from './employee/employee.module';
import { CompanyModule } from './company/company.module';
import { DepartmentModule } from './department/department.module';
import { SalaryModule } from './salary/salary.module';
import { PrismaService } from './prisma/prisma.service';
import { CandidateModule } from './candidates/candidates.m';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmployeeModule,
    CompanyModule,
    DepartmentModule,
    SalaryModule,
    CandidateModule,
  ],
  providers: [PrismaService], // Provide PrismaService
})
export class AppModule {}
