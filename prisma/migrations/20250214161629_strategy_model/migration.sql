-- CreateTable
CREATE TABLE "Strategy" (
    "id" TEXT NOT NULL,
    "duration" DECIMAL(65,30) NOT NULL,
    "maxProfit" DOUBLE PRECISION NOT NULL,
    "maxLoss" DOUBLE PRECISION NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Strategy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Strategy_userId_key" ON "Strategy"("userId");

-- AddForeignKey
ALTER TABLE "Strategy" ADD CONSTRAINT "Strategy_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
