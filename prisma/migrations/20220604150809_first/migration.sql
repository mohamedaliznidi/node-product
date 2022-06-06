-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "nom_commerciale" TEXT NOT NULL,
    "date_effet" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
