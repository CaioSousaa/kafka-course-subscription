import "dotenv/config";

import Express from "express";

const app = Express();

app.use(Express.json());

app.listen(process.env.API_PORT || 3000, () =>
  console.log("[CLASSROOM] server is run")
);
