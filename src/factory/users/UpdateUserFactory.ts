import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-user";
import { UpdateUserController } from "../../controllers/users/UpdateUserController";
import { UpdateUser } from "../../use-cases/user/update-user";

export const UpdateUserFactory = (
  repository: InMemoryUsersRepository
): UpdateUserController => {
  const useCase = new UpdateUser(repository);
  return new UpdateUserController(useCase);
};
