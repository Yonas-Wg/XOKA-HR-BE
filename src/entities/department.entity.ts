// src/entities/department.entity.ts

import { Company } from './company.entity'; 
import { Employee } from './employee.entity';  

export class Department {
  id: string;
  name: string;
  companyId: number;
  company: Company; 
  employees: Employee[]; 
}
