import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './create-department.dto';
import { UpdateDepartmentDto } from './update-department.dto';
import { Department } from '@prisma/client'; // Import Prisma types

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(@Body() createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  async findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Department | null> {
    return this.departmentService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    return this.departmentService.update(id, updateDepartmentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.departmentService.delete(id);
  }
}
