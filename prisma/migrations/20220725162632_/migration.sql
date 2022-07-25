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

-- CreateTable
CREATE TABLE "_FollowRelation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeUser_username_key" ON "CoffeeUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeUser_email_key" ON "CoffeeUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeUser_githubUsername_key" ON "CoffeeUser"("githubUsername");

-- CreateIndex
CREATE UNIQUE INDEX "_FollowRelation_AB_unique" ON "_FollowRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowRelation_B_index" ON "_FollowRelation"("B");

-- AddForeignKey
ALTER TABLE "_FollowRelation" ADD CONSTRAINT "_FollowRelation_A_fkey" FOREIGN KEY ("A") REFERENCES "CoffeeUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowRelation" ADD CONSTRAINT "_FollowRelation_B_fkey" FOREIGN KEY ("B") REFERENCES "CoffeeUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
