// src/salary/create-salary.dto.ts
import { IsString, IsNumber, IsOptional, IsPositive, IsCurrency } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSalaryDto {
  @ApiProperty({
    description: 'The amount of the salary',
    example: 5000.0,  // Example value for amount
  })
  @IsNumber()
  @IsPositive()
  amount?: number;

  @ApiProperty({
    description: 'The currency of the salary',
    example: 'USD',  // Example value for currency
  })
  @IsString()
  currency?: string;
}
