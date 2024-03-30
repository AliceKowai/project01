/*
  Warnings:

  - Added the required column `urlImage` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "car" ADD COLUMN     "urlImage" TEXT NOT NULL,
ALTER COLUMN "year" SET DATA TYPE TEXT,
ALTER COLUMN "price" SET DATA TYPE TEXT;
