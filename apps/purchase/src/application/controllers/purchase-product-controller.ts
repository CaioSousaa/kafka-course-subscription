import { Request, Response } from "express";
import { PurchaseProduct } from "../usecases/purchase-product";

export class PurchaseProductController {
  constructor(private purchaseProduct: PurchaseProduct) {}

  async handle(req: Request, res: Response) {
    const { name, email, cpf, product_id } = req.body;

    const newPurchase = await this.purchaseProduct.execute({
      name,
      email,
      cpf,
      product_id,
    });

    res.send(newPurchase).status(201);
  }
}
