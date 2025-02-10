import { Router } from "express";
import { CreateUserFactory } from "../../../factory/users/CreateUserFactory";
import { InMemoryUsersRepository } from "../../../repositories/in-memory/in-memory-user";

export const createUserRoutes = (userRepository: InMemoryUsersRepository) => {
  const createUserController = CreateUserFactory(userRepository);
  const router = Router();

  router.post("/create", (req, res) => {
    createUserController.handle(req, res);
  });

  return router;
};
