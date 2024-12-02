import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';  

export class CreateCandidateDto {
  @ApiProperty({
    description: 'The first name of the candidate',
    example: 'John',  
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: 'The last name of the candidate',
    example: 'Doe', 
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'The email of the candidate',
    example: 'john.doe@example.com',  // Example value for Swagger UI
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The phone number of the candidate',
    example: '+1234567890', 
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'The position the candidate is applying for',
    example: 'Software Engineer',  
  })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({
    description: 'The date when the candidate applied',
    example: '2024-12-01T00:00:00Z',  
    required: false,  
  })
  @IsOptional()
  appliedAt?: Date;

  @ApiProperty({
    description: 'The ID of the company the candidate is applying to',
    example: 'abc123',  
    required: false,  
  })
  @IsOptional()
  companyId: string;
}
