import { Router } from "express";
import { GetAllUsersController } from "../../../controllers/GetAllUsersController";
import { InMemoryUsersRepository } from "repositories/in-memory/in-memory-user";

export const getUsersRoutes = (userRepository: InMemoryUsersRepository) => {
  const getAllUsersController = new GetAllUsersController(userRepository);
  const router = Router();

  router.get("/", async (req, res) => {
    await getAllUsersController.handle(req, res);
  });

  return router;
};
