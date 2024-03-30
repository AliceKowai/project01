/*
  Warnings:

  - Added the required column `location` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "car" ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL;
