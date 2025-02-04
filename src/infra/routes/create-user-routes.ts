import { Router } from "express";
import { CreateUserFactory } from "../../factory/CreateUserFactory";

const createUserRoutes = Router();

createUserRoutes.post("/create", (req, res) => {
  return CreateUserFactory().handle(req, res);
});

export { createUserRoutes };
