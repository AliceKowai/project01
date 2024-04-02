/*
  Warnings:

  - You are about to drop the column `firstName` on the `user_login` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `user_login` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `user_login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_login" DROP COLUMN "firstName",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_login_username_key" ON "user_login"("username");
