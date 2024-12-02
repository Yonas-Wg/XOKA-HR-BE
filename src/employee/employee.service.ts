import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Employee } from '@prisma/client';  // Import Prisma namespace and Employee type from Prisma
import { CreateEmployeeDto } from './create-employee.dto';
@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new employee
  async create(employeeData: CreateEmployeeDto): Promise<Employee> {
    return this.prisma.employee.create({
      data: {
        name: employeeData.name,
      
        companyId: employeeData.companyId,
        departmentId: employeeData.departmentId,
        salaryId: employeeData.salaryId,
      },
    });
  }
  

  // Fetch all employees
  async findAll(): Promise<Employee[]> {
    return this.prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        companyId: true, // companyId is used
        departmentId: true, // departmentId is used
        salaryId: true, // salaryId is used
      },
    });
  }

  // Fetch employee by ID
  async findById(id: string): Promise<Employee | null> {
    return this.prisma.employee.findUnique({
      where: { id },
    });
  }

  // Update employee by ID
  async update(id: string, employeeData: Partial<Employee>): Promise<Employee> {
    return this.prisma.employee.update({
      where: { id },
      data: employeeData, // Use Partial<Employee> for partial updates
    });
  }

  // Delete employee by ID
  async delete(id: string): Promise<Employee> {
    return this.prisma.employee.delete({
      where: { id },
    });
  }
}
