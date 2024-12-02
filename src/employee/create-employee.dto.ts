import { IsString, IsEmail, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'The name of the employee',
    example: 'John Doe',  // Example value: 'John Doe'
  })
  @IsString()
  name: string;




  @ApiProperty({
    description: 'The company ID the employee belongs to',
    example: 'fcd679a3-bf60-4875-bec0-57e6a931f5b1',  // Example value: 'fcd679a3-bf60-4875-bec0-57e6a931f5b1'
  })
  @IsUUID()
  companyId: string;

  @ApiProperty({
    description: 'The department ID of the employee',
    example: '7d2fc31b-4f60-4e50-bb60-07f9a77b22fd',  // Example value: '7d2fc31b-4f60-4e50-bb60-07f9a77b22fd'
  })
  @IsUUID()
  departmentId: string;

  @ApiProperty({
    description: 'The salary ID for the employee',
    example: '12345678-abcd-1234-abcd-1234567890ab',  // Example value: '12345678-abcd-1234-abcd-1234567890ab'
  })
  @IsUUID()
  salaryId: string;
}
