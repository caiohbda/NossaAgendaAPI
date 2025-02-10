import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-user";
import { CreateUserController } from "../../controllers/users/CreateUserController";
import { CreateUser } from "../../use-cases/user/create-user";

export const CreateUserFactory = (
  repository: InMemoryUsersRepository
): CreateUserController => {
  const useCase = new CreateUser(repository);
  return new CreateUserController(useCase);
};
