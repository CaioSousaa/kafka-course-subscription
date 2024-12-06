import "dotenv/config";

import express from "express";
import cors from "cors";

import purchaseProductRouter from "./routes/purchase-product.routes";

const app = express();

app.use(cors());
app.use(purchaseProductRouter);

app.listen(process.env.PORT || 3333, () => console.log("[PURCHASE] is run"));
