import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CandidateService } from './CandidateService';
import { CreateCandidateDto } from './CreateCandidateDto';
import { UpdateCandidateDto } from './UpdateCandidateDto ';

@Controller('candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  // Create a new candidate
  @Post()
  async create(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidateService.create(createCandidateDto);
  }

  // Get all candidates
  @Get()
  async findAll() {
    return this.candidateService.findAll();
  }

  // Get a candidate by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.candidateService.findById(id);
  }

  // Update a candidate's information
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto) {
    return this.candidateService.update(id, updateCandidateDto);
  }

  // Delete a candidate by ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.candidateService.delete(id);
  }
}
