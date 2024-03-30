/*
  Warnings:

  - You are about to drop the column `carId` on the `favorite` table. All the data in the column will be lost.
  - Added the required column `idCar` to the `favorite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "favorite" DROP COLUMN "carId",
ADD COLUMN     "idCar" TEXT NOT NULL;
