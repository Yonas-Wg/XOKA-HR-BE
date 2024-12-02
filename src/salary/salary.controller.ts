import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { CreateSalaryDto } from './create-salary.dto';
import { UpdateSalaryDto } from './update-salary.dto';

@Controller('salaries')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  // Create Salary
  @Post()
  create(@Body() createSalaryDto: CreateSalaryDto) {
    return this.salaryService.create(createSalaryDto);
  }

  // Get all salaries
  @Get()
  findAll() {
    return this.salaryService.findAll();
  }

  // Get one salary by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salaryService.findOne(id);
  }

  // Update salary
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalaryDto: UpdateSalaryDto) {
    return this.salaryService.update(id, updateSalaryDto);
  }

  // Delete salary
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salaryService.remove(id);
  }
}
