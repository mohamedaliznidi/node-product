/* eslint-disable import/prefer-default-export */
import { Product } from '@prisma/client';
import prisma from '@src/prisma/client';

export const getAllProduct = async (): Promise<Product[]> => {
  return prisma.product.findMany();
};

export const createProduct = async (nom: string, nomCommercial: string, dateEffet: string): Promise<Product> => {
  return prisma.product.create({
    data: {
      nom,
      nomCommerciale: nomCommercial,
      dateEffet,
    },
  });
};
