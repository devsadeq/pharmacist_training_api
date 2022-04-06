/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Plan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "name" TEXT NOT NULL DEFAULT E'user';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "status" SET DEFAULT E'pending',
ALTER COLUMN "identity_card" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Plan_name_key" ON "Plan"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");
