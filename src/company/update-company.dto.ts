import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCompanyDto {
    @ApiProperty({
        description: 'The name of the company',        
        example: 'Microsoft', 
          })

  @IsString()
  @IsOptional()
  name?: string;
}
