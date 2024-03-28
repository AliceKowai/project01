/*
  Warnings:

  - Made the column `year` on table `car` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "car" ALTER COLUMN "year" SET NOT NULL,
ALTER COLUMN "year" SET DATA TYPE TEXT;
