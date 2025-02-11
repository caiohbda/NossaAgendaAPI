import { Router } from "express";
import { UpdateUserController } from "../../../controllers/users/UpdateUserController";
import { InMemoryUsersRepository } from "../../../repositories/in-memory/in-memory-user";
import { UpdateUser } from "use-cases/user/update-user";

export const updateUserRoutes = (userRepository: InMemoryUsersRepository) => {
  const updateUserController = new UpdateUserController(
    new UpdateUser(userRepository)
  );

  const router = Router();

  router.put("/update/:id", async (req, res) => {
    await updateUserController.handle(req, res);
  });

  return router;
};
