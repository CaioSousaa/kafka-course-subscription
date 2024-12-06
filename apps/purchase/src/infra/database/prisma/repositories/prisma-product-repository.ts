import { ProductRepository } from "../../../../application/repositories/product-repository";
import { Product } from "../../../../domain/product";
import prisma from "../prisma";

export class PrismaProductRepository implements ProductRepository {
  async findById(id: string): Promise<Product | null> {
    const product = await prisma.product.findFirst({
      where: { id },
    });

    if (!product) {
      return null;
    }

    return new Product(
      {
        title: product.title,
        categories: product.categories,
      },
      product.id
    );
  }
}
