import "dotenv/config";
import express from "express";
import { createUserRoutes } from "../../routes/users/create-user-routes";
import { getUsersRoutes } from "infra/routes/users/get-all-users-routes";
import { InMemoryUsersRepository } from "../../../repositories/in-memory/in-memory-user";

const userRepository = new InMemoryUsersRepository(); // Criando uma única instância

const app = express();

app.use(express.json());
app.use("/users", createUserRoutes(userRepository));
app.use("/users", getUsersRoutes(userRepository));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});

export { app };
