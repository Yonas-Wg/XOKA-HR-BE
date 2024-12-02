/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Salary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `Company` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Department` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `companyId` on the `Department` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `companyId` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `departmentId` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `salaryId` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Salary` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_salaryId_fkey";

-- DropIndex
DROP INDEX "Employee_salaryId_key";

-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Department" DROP CONSTRAINT "Department_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "companyId",
ADD COLUMN     "companyId" UUID NOT NULL,
ADD CONSTRAINT "Department_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "companyId",
ADD COLUMN     "companyId" UUID NOT NULL,
DROP COLUMN "departmentId",
ADD COLUMN     "departmentId" UUID NOT NULL,
DROP COLUMN "salaryId",
ADD COLUMN     "salaryId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Salary" DROP CONSTRAINT "Salary_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Salary_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Candidate" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "position" TEXT NOT NULL,
    "companyId" UUID NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_salaryId_fkey" FOREIGN KEY ("salaryId") REFERENCES "Salary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
