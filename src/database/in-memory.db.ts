// src/database/in-memory.db.ts

import { Company } from '../entities/company.entity';
import { Department } from '../entities/department.entity';
import { Employee } from '../entities/employee.entity';
import { Salary } from '../entities/salary.entity';

export class InMemoryDatabase {
  companies: Company[] = [];
  departments: Department[] = [];
  employees: Employee[] = [];
  salaries: Salary[] = [];
}
