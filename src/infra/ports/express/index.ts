import "dotenv/config";
import express from "express";

const PORT = 5000;

const app = express();

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});

export { app };
