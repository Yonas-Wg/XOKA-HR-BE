-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_departmentId_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "departmentId" DROP NOT NULL,
ALTER COLUMN "departmentId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
