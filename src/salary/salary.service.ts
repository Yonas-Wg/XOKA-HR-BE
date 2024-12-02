import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/employee/prisma.service';
import { CreateSalaryDto } from './create-salary.dto';
import { UpdateSalaryDto } from './update-salary.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class SalaryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSalaryDto: CreateSalaryDto) {
    const { amount, currency } = createSalaryDto;
  
    const salaryData: Prisma.SalaryCreateInput = {
      amount,
      currency,
    };
  
    try {
      return await this.prisma.salary.create({
        data: salaryData,
      });
    } catch (error) {
      console.error('Error creating salary:', error);
      throw new Error('Failed to create salary record');
    }
  }
  

  // Get all salaries
  async findAll() {
    try {
      return await this.prisma.salary.findMany();
    } catch (error) {
      console.error('Error fetching salaries:', error);
      throw new Error('Failed to fetch salary records');
    }
  }

  // Get one salary by ID
  async findOne(id: string) {
    try {
      const salary = await this.prisma.salary.findUnique({
        where: { id },
      });

      if (!salary) {
        throw new NotFoundException(`Salary with ID ${id} not found`);
      }

      return salary;
    } catch (error) {
      console.error('Error fetching salary:', error);
      throw new Error(`Failed to fetch salary with ID ${id}`);
    }
  }

  // Update salary
  async update(id: string, updateSalaryDto: UpdateSalaryDto) {
    try {
      const updatedSalary = await this.prisma.salary.update({
        where: { id },
        data: updateSalaryDto,
      });

      return updatedSalary;
    } catch (error) {
      console.error('Error updating salary:', error);

      // Check if the error is related to the record not existing
      if (error.code === 'P2025') {
        throw new NotFoundException(`Salary with ID ${id} not found`);
      }

      throw new Error('Failed to update salary record');
    }
  }

  // Delete salary
  async remove(id: string) {
    try {
      return await this.prisma.salary.delete({
        where: { id },
      });
    } catch (error) {
      console.error('Error deleting salary:', error);

      // Check if the error is related to the record not existing
      if (error.code === 'P2025') {
        throw new NotFoundException(`Salary with ID ${id} not found`);
      }

      throw new Error('Failed to delete salary record');
    }
  }
}
