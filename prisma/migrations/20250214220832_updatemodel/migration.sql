/*
  Warnings:

  - You are about to alter the column `maxProfit` on the `Strategy` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `maxLoss` on the `Strategy` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `totalAmount` on the `Strategy` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Strategy" ALTER COLUMN "maxProfit" SET DATA TYPE INTEGER,
ALTER COLUMN "maxLoss" SET DATA TYPE INTEGER,
ALTER COLUMN "totalAmount" SET DATA TYPE INTEGER;
