import { Router } from "express";
import { DeleteUserFactory } from "../../../factory/users/DeleteUserFactory";
import { InMemoryUsersRepository } from "../../../repositories/in-memory/in-memory-user";

export const deleteUserRoutes = (userRepository: InMemoryUsersRepository) => {
  const deleteUserController = DeleteUserFactory(userRepository);

  const router = Router();

  router.delete("/delete/:id", async (req, res) => {
    await deleteUserController.handle(req, res);
  });

  return router;
};
