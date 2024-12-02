import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './create-employee.dto';  // Import DTO
import { Employee } from '@prisma/client';  // Import Employee type from Prisma

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() employee: CreateEmployeeDto): Promise<Employee> {
    console.log('Employee data received:', employee);  // Log received employee data
    return this.employeeService.create(employee);  // Pass DTO to the service
  }

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Employee | null> {
    return this.employeeService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() employee: CreateEmployeeDto): Promise<Employee> {
    return this.employeeService.update(id, employee);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.delete(id);
  }
}
