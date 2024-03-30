/*
  Warnings:

  - Changed the type of `idCar` on the `favorite` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idUser` on the `favorite` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "favorite" DROP COLUMN "idCar",
ADD COLUMN     "idCar" INTEGER NOT NULL,
DROP COLUMN "idUser",
ADD COLUMN     "idUser" INTEGER NOT NULL;
