/*
  Warnings:

  - You are about to drop the column `urlImage` on the `car` table. All the data in the column will be lost.
  - Added the required column `urlImage1` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlImage2` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlImage3` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "car" DROP COLUMN "urlImage",
ADD COLUMN     "urlImage1" TEXT NOT NULL,
ADD COLUMN     "urlImage2" TEXT NOT NULL,
ADD COLUMN     "urlImage3" TEXT NOT NULL;
