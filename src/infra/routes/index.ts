import { Router } from "express";
import { createUserRoutes } from "./users/create-user-routes";
import { getUsersRoutes } from "./users/get-all-users-routes";

const router = Router();

router.use("/v1/users", createUserRoutes);
router.use("/v1/users", getUsersRoutes);

export { router };
