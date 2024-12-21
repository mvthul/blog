-- CreateTable
CREATE TABLE "views" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "count" BIGINT NOT NULL DEFAULT 1
);

-- CreateTable
CREATE TABLE "guestbook" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "views_slug_key" ON "views"("slug");
