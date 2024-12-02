import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';  // Import ApiProperty from @nestjs/swagger

export class UpdateCandidateDto {
  @ApiProperty({
    description: 'The first name of the candidate',
    example: 'John',  // Example value for Swagger UI
    required: false,  // This field is optional in the update DTO
  })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({
    description: 'The last name of the candidate',
    example: 'Doe',  // Example value for Swagger UI
    required: false,  // This field is optional in the update DTO
  })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({
    description: 'The email of the candidate',
    example: 'john.doe@example.com',  // Example value for Swagger UI
    required: false,  // This field is optional in the update DTO
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'The phone number of the candidate',
    example: '+1234567890',  // Example value for Swagger UI
    required: false,  // This field is optional in the update DTO
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'The position the candidate is applying for',
    example: 'Senior Software Engineer',  // Example value for Swagger UI
    required: false,  // This field is optional in the update DTO
  })
  @IsString()
  @IsOptional()
  position?: string;

  @ApiProperty({
    description: 'The ID of the company the candidate is applying to',
    example: 'xyz456',  // Example value for Swagger UI
    required: false,  // This field is optional in the update DTO
  })
  @IsOptional()
  companyId: string;
}
