import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/employee/prisma.service';
import { CreateCandidateDto } from './CreateCandidateDto';
import { UpdateCandidateDto } from './UpdateCandidateDto ';
import { Prisma } from '@prisma/client'; // Import Prisma types

@Injectable()
export class CandidateService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new candidate
  async create(createCandidateDto: CreateCandidateDto) {
    const { firstName, lastName, email, phone, position, appliedAt, companyId } = createCandidateDto;
  
    // Check if the company exists
    const company = await this.prisma.company.findUnique({
      where: { id: companyId },
    });
  
    if (!company) {
      throw new Error('Company with the provided companyId does not exist');
    }
  
    // Proceed to create the candidate
    return this.prisma.candidate.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        position,
        appliedAt: appliedAt || new Date(),
        companyId,  // Ensure companyId is valid
      },
    });
  }
  

  // Get all candidates
  async findAll() {
    return this.prisma.candidate.findMany();
  }

  // Get one candidate by ID
  async findById(id: string) {
    return this.prisma.candidate.findUnique({
      where: { id },
    });
  }

  // Update a candidate's information
  async update(id: string, updateCandidateDto: UpdateCandidateDto) {
    return this.prisma.candidate.update({
      where: { id },
      data: updateCandidateDto,
    });
  }

  // Delete a candidate
  async delete(id: string) {
    return this.prisma.candidate.delete({
      where: { id },
    });
  }
}
