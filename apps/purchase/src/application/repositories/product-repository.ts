import { Product } from "../../domain/product";

export interface ProductRepository {
  findById(id: string): Promise<Product | null>;
}
