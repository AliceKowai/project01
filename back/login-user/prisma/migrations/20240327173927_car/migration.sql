-- CreateTable
CREATE TABLE "car" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "km" DOUBLE PRECISION NOT NULL,
    "exteriorColor" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "entertainment" TEXT NOT NULL,
    "safety" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);
