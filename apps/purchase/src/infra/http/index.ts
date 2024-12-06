import "dotenv/config";

import express from "express";

import purchaseProductRouter from "./routes/purchase-product.routes";

const app = express();

app.use(express.json());
app.use(purchaseProductRouter);

app.listen(process.env.PORT || 3333, () => console.log("[PURCHASE] is run"));
