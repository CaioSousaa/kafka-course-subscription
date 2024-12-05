import { PurchaseRepository } from "../../../../application/repositories/purchase-repository";
import { Purchase } from "../../../../domain/purchase";
import prisma from "../prisma";

export class PrismaPurchaseRepository implements PurchaseRepository {
  async create(purchase: Purchase): Promise<void> {
    await prisma.purchase.create({
      data: {
        id: purchase.id,
        id_customer: purchase.id_customer,
        id_product: purchase.id_product,
        created_at: new Date(),
      },
    });
  }
}
