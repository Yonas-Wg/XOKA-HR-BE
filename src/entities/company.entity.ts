// src/entities/company.entity.ts

import { Department } from './department.entity';  
import { Employee } from './employee.entity';  

export class Company {
  id: string;
  name: string;
  departments: Department[]; // relation with Department
  employees: Employee[]; // relation with Employee
}
