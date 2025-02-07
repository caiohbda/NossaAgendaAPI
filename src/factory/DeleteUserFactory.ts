import { InMemoryUsersRepository } from "../repositories/in-memory/in-memory-user";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { DeleteUser } from "../use-cases/user/delete-user";

export const DeleteUserFactory = (
  repository: InMemoryUsersRepository
): DeleteUserController => {
  const useCase = new DeleteUser(repository);
  return new DeleteUserController(useCase);
};
