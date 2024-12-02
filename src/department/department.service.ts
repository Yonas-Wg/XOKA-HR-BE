import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './create-department.dto';
import { UpdateDepartmentDto } from './update-department.dto';
import { Department } from '@prisma/client'; // Import Prisma types

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new department
  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const { companyId, name } = createDepartmentDto;

    // Check if the companyId exists in the Company table
    const company = await this.prisma.company.findUnique({
      where: { id: companyId },
    });

    // If companyId does not exist, throw an exception
    if (!company) {
      throw new NotFoundException(`Company with ID ${companyId} not found`);
    }

    // Create the department using the existing companyId
    return this.prisma.department.create({
      data: {
        name,
        companyId,  // Use the existing companyId from the DTO
      },
    });
  }

  // Find all departments
  async findAll(): Promise<Department[]> {
    return this.prisma.department.findMany();
  }

  // Find a department by its ID
  async findById(id: string): Promise<Department | null> {
    return this.prisma.department.findUnique({
      where: { id },
    });
  }

  // Update a department
  async update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<Department> {
    const { companyId, name } = updateDepartmentDto;

    // Check if the companyId exists in the Company table
    const company = await this.prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      throw new NotFoundException(`Company with ID ${companyId} not found`);
    }

    return this.prisma.department.update({
      where: { id },
      data: {
        name,
        companyId,  // Ensure the companyId is valid before updating
      },
    });
  }

  // Delete a department
  async delete(id: string): Promise<Department> {
    return this.prisma.department.delete({
      where: { id },
    });
  }
}
