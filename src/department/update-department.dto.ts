import { IsString, IsUUID, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';

export class UpdateDepartmentDto {
  @ApiProperty({
    description: 'The name of the department',
    example: 'Human Resources',  
    required: false,  
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Company ID of the department',
    example: 'fcd679a3-bf60-4875-bec0-57e6a931f5b1', 
  })
  @IsString()
  @IsNotEmpty()
  companyId: string; 
}
