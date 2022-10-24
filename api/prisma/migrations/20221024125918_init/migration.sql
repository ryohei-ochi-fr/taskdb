/*
  Warnings:

  - Added the required column `filepath` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Jobs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "state" TEXT NOT NULL DEFAULT 'QUEUED',
    "priority" INTEGER NOT NULL DEFAULT 10,
    "filepath" TEXT NOT NULL,
    "command" TEXT,
    "description" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "beginAt" DATETIME,
    "finishAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Jobs" ("beginAt", "command", "completed", "createdAt", "description", "finishAt", "id", "priority", "state", "updatedAt") SELECT "beginAt", "command", "completed", "createdAt", "description", "finishAt", "id", "priority", "state", "updatedAt" FROM "Jobs";
DROP TABLE "Jobs";
ALTER TABLE "new_Jobs" RENAME TO "Jobs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
