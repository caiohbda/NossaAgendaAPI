import { Router } from "express";
import { InMemoryUsersRepository } from "../../../repositories/in-memory/in-memory-user";
import { FindById } from "../../../use-cases/user/find-by-id";
import { FindByIdController } from "../../../controllers/users/FindByIdController";

export const findUserByIdRoutes = (userRepository: InMemoryUsersRepository) => {
  const findUserByIdUseCase = new FindById(userRepository);
  const findUserByIdController = new FindByIdController(findUserByIdUseCase);
  const router = Router();

  router.get("/:id", async (req, res) => {
    await findUserByIdController.handle(req, res);
  });

  return router;
};
