// create-department.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateDepartmentDto {
    @ApiProperty({
        description: 'The name of the department',
        example: 'Human Resources', 
      })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Company ID of the department',
    example: 'fcd679a3-bf60-4875-bec0-57e6a931f5b1', 
  })
  @IsString()
  @IsNotEmpty()
  companyId: string;  
}
