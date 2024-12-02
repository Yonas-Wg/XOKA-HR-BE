import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto { 
     @ApiProperty({
    description: 'The name of the company',        
    example: 'Microsoft', 
      })
  @IsString()
  name: string;
}
