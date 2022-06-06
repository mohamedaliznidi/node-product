/*
  Warnings:

  - You are about to drop the column `date_effet` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `nom_commerciale` on the `Product` table. All the data in the column will be lost.
  - Added the required column `dateEffet` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomCommerciale` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "date_effet",
DROP COLUMN "nom_commerciale",
ADD COLUMN     "dateEffet" TEXT NOT NULL,
ADD COLUMN     "nomCommerciale" TEXT NOT NULL;
