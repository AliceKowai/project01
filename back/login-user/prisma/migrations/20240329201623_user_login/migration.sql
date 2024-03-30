-- CreateTable
CREATE TABLE "_carTouser_login" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_carTouser_login_AB_unique" ON "_carTouser_login"("A", "B");

-- CreateIndex
CREATE INDEX "_carTouser_login_B_index" ON "_carTouser_login"("B");

-- AddForeignKey
ALTER TABLE "_carTouser_login" ADD CONSTRAINT "_carTouser_login_A_fkey" FOREIGN KEY ("A") REFERENCES "car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_carTouser_login" ADD CONSTRAINT "_carTouser_login_B_fkey" FOREIGN KEY ("B") REFERENCES "user_login"("id") ON DELETE CASCADE ON UPDATE CASCADE;
