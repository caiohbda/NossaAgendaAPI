import "dotenv/config";
import express from "express";
import { createUserRoutes } from "../../routes/users/create-user-routes";
import { getUsersRoutes } from "infra/routes/users/get-all-users-routes";
import { InMemoryUsersRepository } from "../../../repositories/in-memory/in-memory-user";
import { deleteUserRoutes } from "infra/routes/users/delete-user-routes";
import { findUserByIdRoutes } from "infra/routes/users/find-by-id-routes";
import { updateUserRoutes } from "infra/routes/users/update-user-routes";

const userRepository = new InMemoryUsersRepository();

const app = express();

app.use(express.json());
app.use("/users", createUserRoutes(userRepository));
app.use("/users", getUsersRoutes(userRepository));
app.use("/users", deleteUserRoutes(userRepository));
app.use("/users", findUserByIdRoutes(userRepository));
app.use("/users", updateUserRoutes(userRepository));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});

export { app };
