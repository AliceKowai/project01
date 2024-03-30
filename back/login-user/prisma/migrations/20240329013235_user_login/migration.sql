/*
  Warnings:

  - You are about to drop the column `cpf` on the `user_login` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `user_login` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `user_login` table. All the data in the column will be lost.
  - You are about to drop the column `permission` on the `user_login` table. All the data in the column will be lost.
  - Made the column `favorite` on table `car` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "user_login_cpf_key";

-- AlterTable
ALTER TABLE "car" ALTER COLUMN "favorite" SET NOT NULL,
ALTER COLUMN "favorite" SET DEFAULT false;

-- AlterTable
ALTER TABLE "user_login" DROP COLUMN "cpf",
DROP COLUMN "dateOfBirth",
DROP COLUMN "lastName",
DROP COLUMN "permission";

-- CreateTable
CREATE TABLE "favorites" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);
