import { Router } from "express";
import { purchaseProductFactory } from "../../factories/purchase-product-factory";

const purchaseProductRouter = Router();

purchaseProductRouter.post("/purchse-product", async (req, res) => {
  return purchaseProductFactory().handle(req, res);
});

export default purchaseProductRouter;
