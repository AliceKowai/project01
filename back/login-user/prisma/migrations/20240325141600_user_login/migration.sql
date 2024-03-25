-- CreateTable
CREATE TABLE "user_login" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "permission" TEXT NOT NULL,

    CONSTRAINT "user_login_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_login_email_key" ON "user_login"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_login_cpf_key" ON "user_login"("cpf");
