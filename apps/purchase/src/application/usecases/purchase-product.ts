import { CustomerRepository } from "../repositories/customer-repository";
import { ProductRepository } from "../repositories/product-repository";
import { PurchaseRepository } from "../repositories/purchase-repository";
import { MessagingAdapter } from "../adapters/messaging-adapter";
import { Customer } from "../../domain/customer";
import { Purchase } from "../../domain/purchase";

interface PurchaseProductRequest {
  name: string;
  cpf: string;
  email: string;
  product_id: string;
}

export class PurchaseProduct {
  constructor(
    private customerRepository: CustomerRepository,
    private purchaseRepository: PurchaseRepository,
    private prductRepository: ProductRepository,
    private messagingAdapter: MessagingAdapter
  ) {}

  async execute({ cpf, email, name, product_id }: PurchaseProductRequest) {
    const product = await this.prductRepository.findById(product_id);

    if (!product) {
      throw new Error("Products does not exists");
    }

    let customer = await this.customerRepository.findCustomerByEmail(email);

    if (!customer) {
      customer = new Customer({ name, email, cpf });
      await this.customerRepository.create(customer);
    }

    const purchase = new Purchase({
      id_customer: customer.id,
      id_product: product_id,
      created_at: new Date(),
    });

    await this.purchaseRepository.create(purchase);

    await this.messagingAdapter.sendMessaging("purchase.new-purchase", {
      product: {
        id: product.id,
        title: product.title,
        categories: product.categories,
      },
      customer: {
        name: customer.name,
        email: customer.email,
        cpf: customer.cpf,
      },
      purchase: {
        id: purchase.id,
      },
    });
  }
}
