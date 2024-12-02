import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/employee/prisma.service';  
import { CreateCompanyDto } from './create-company.dto';
import { UpdateCompanyDto } from './update-company.dto';
import { Prisma } from '@prisma/client';  // Import Prisma types

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new company
  async create(createCompanyDto: CreateCompanyDto) {
    const { name } = createCompanyDto;

    // Define the type explicitly for Prisma create method
    const companyData: Prisma.CompanyCreateInput = {
      name,
    };

    return this.prisma.company.create({
      data: companyData,
    });
  }

  // Get all companies
  async findAll() {
    return this.prisma.company.findMany();
  }

  // Get one company by ID
  async findOne(id: string) {
    return this.prisma.company.findUnique({
      where: { id },
    });
  }

  // Update a company
  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.prisma.company.update({
      where: { id },
      data: updateCompanyDto,
    });
  }

  async remove(id: string) {
    try {
      // Fetch department IDs for the given company
      const departments = await this.prisma.department.findMany({
        where: { companyId: id },
        select: { id: true },  // Only select the ID field for efficiency
      });
  
      // Update employees to set their departmentId to null if they belong to the departments we are deleting
      await this.prisma.employee.updateMany({
        where: { departmentId: { in: departments.map(dep => dep.id) } },
        data: { departmentId: null },
      });
  
      // Delete the departments for the given company
      await this.prisma.department.deleteMany({
        where: { companyId: id },
      });
  
      // Finally, delete the company
      return await this.prisma.company.delete({
        where: { id },
      });
    } catch (error) {
      console.error('Error deleting company:', error);
      throw new Error('Error deleting company');
    }
  }
  
  
}
