import "dotenv/config";
import express from "express";
import { router } from "infra/routes";

const PORT = 5000;

const app = express();

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});

export { app };
