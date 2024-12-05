import { Purchase } from "../../domain/purchase";

export interface PurchaseRepository {
  create(purchase: Purchase): Promise<void>;
}
