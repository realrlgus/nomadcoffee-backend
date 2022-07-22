-- CreateTable
CREATE TABLE "CoffeeUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatarURL" TEXT NOT NULL,
    "githubUsername" TEXT NOT NULL,

    CONSTRAINT "CoffeeUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeUser_username_key" ON "CoffeeUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeUser_email_key" ON "CoffeeUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeUser_githubUsername_key" ON "CoffeeUser"("githubUsername");
