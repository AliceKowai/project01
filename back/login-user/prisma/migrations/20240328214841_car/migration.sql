-- CreateTable
CREATE TABLE "ImageCarro" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "ImageCarro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageCarro" ADD CONSTRAINT "ImageCarro_carId_fkey" FOREIGN KEY ("carId") REFERENCES "car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
