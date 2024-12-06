import { PurchaseProductController } from "../../application/controllers/purchase-product-controller";
import { PurchaseProduct } from "../../application/usecases/purchase-product";
import { PrismaCustomerRepository } from "../database/prisma/repositories/prisma-customer-repository";
import { PrismaProductRepository } from "../database/prisma/repositories/prisma-product-repository";
import { PrismaPurchaseRepository } from "../database/prisma/repositories/prisma-purchase-repository";
import { KafkaMessagingAdapter } from "../messaging/kafka/adapters/kafka-messaging-adapter";

export const purchaseProductFactory = () => {
  const customerRepoistory = new PrismaCustomerRepository();
  const purchaseRepository = new PrismaPurchaseRepository();
  const productRepository = new PrismaProductRepository();
  const kafkaMessagingAdapter = new KafkaMessagingAdapter();

  const purcaseProductUseCase = new PurchaseProduct(
    customerRepoistory,
    purchaseRepository,
    productRepository,
    kafkaMessagingAdapter
  );

  const purchaseProductController = new PurchaseProductController(
    purcaseProductUseCase
  );

  return purchaseProductController;
};
