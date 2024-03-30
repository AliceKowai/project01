/*
  Warnings:

  - You are about to drop the column `favorite` on the `car` table. All the data in the column will be lost.
  - You are about to drop the `favorite` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "car" DROP COLUMN "favorite";

-- DropTable
DROP TABLE "favorite";
