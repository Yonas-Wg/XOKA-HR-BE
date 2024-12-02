// src/salary/update-salary.dto.ts
import { IsString, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSalaryDto {
  @ApiProperty({
    description: 'The amount of the salary',
    example: 5500.0,  // Example value for amount
    required: false,  // Optional for update
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  amount?: number;

  @ApiProperty({
    description: 'The currency of the salary',
    example: 'EUR',  // Example value for currency
    required: false,  // Optional for update
  })
  @IsString()
  @IsOptional()
  currency?: string;
}
