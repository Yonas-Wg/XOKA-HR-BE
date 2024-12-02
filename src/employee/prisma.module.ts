// src/employee/prisma.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Make sure PrismaService is exported so other modules can access it
})
export class PrismaModule {}
