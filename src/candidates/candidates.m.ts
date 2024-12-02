import { Module } from '@nestjs/common';
import { CandidateController } from './candidates.c';
import { CandidateService } from './CandidateService';
import { PrismaService } from '../employee/prisma.service';

@Module({
  controllers: [CandidateController],
  providers: [CandidateService, PrismaService],
})
export class CandidateModule {}
